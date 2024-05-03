import { formatDate } from "@/libs/helpers";
import { type NewsletterForm } from "@/types/NewsletterForm";
import { useMutation } from "@tanstack/react-query";
import { isString } from "lodash";
import nodemailer from "nodemailer";

export type SubmitState =
  | {
      status: "success";
      message: string;
    }
  | {
      status: "fail";
      message: string;
      error?: string;
    }
  | null;

export default async function useSubscribe() {
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (data: Pick<NewsletterForm, "fullName" | "to">) =>
      sendEmail(data),
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("error");
    },
    onSettled: () => {
      console.log("execute without regard for the result");
    },
  });

  return { mutate, isPending, isError };
}

export async function sendEmail(
  data: Pick<NewsletterForm, "fullName" | "to">,
): Promise<SubmitState> {
  const { to, fullName } = data;

  const emailOption = {
    to: to,
    subject: `[ARCHON] Your Subscription Confirmed`,
    from: process.env.AUTH_USER,
    html: `
    <p>Dear ${fullName},</p>

    <p>Thank you for subscribing to Archon! We are thrilled to have you as a part of our community.</p>
  
    <p>Your subscription details:</p>
    <ul>
      <li>Subscription Plan: Basic</li>
      <li>Start Date: ${formatDate(new Date())}</li>
      <li>Billing Cycle: Free</li>
    </ul>
  
    <p>As a subscriber, you now have access to exclusive benefits and features, including:</p>
    <ol>
      <li>Unlimited access to our digital archive of past issues, featuring in-depth articles, interviews, and case studies from renowned architects and designers worldwide.</li>
      <li>Exclusive invitations to subscriber-only events, such as virtual tours, webinars, and Q&amp;A sessions with industry experts, keeping you connected and informed.</li>
      <li>Complimentary access to our premium online courses, covering a wide range of topics from architectural design principles to sustainable building practices, helping you enhance your skills and stay ahead in your career.</li>
    </ol>
  
    <p>If you have any questions or need assistance, our dedicated support team is here to help. You can reach us by our website.</p>
  
    <p>We appreciate your trust in us and are committed to providing you with the best possible experience. Keep an eye out for future updates, exclusive offers, and helpful resources that will be sent to your registered email address.</p>
  
    <p>Once again, welcome aboard!</p>
  
    <p>Best regards,<br>
    Archon</p>

    <p>[!] THIS MESSAGE IS SENT FOR A TEST PURPOSE</p>
    `,
  };

  try {
    // await transporter.sendMail(emailOption);
    return {
      status: "success",
      message: "Email sent successfully",
    };
  } catch (error) {
    console.error("Failed to send the email:", error);
    return {
      status: "fail",
      message: "Failed to send the email",
      error: isString(error) ? error : undefined,
    };
  }
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
