"use server";
import {
  NewsletterFormData,
  NewsletterFormState,
} from "@/components/organisms/NewsletterForm";
import { formatDate } from "@/libs/helpers";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

async function subscribe(
  prev: any,
  formData: FormData,
): Promise<NewsletterFormState> {
  // validate data
  const fullName = (formData?.get("fullName") as string) || "";
  if (fullName === "" || fullName.length < 3) {
    return {
      status: "invalid",
      invalid: {
        field: "fullName",
        errorMessage: "Type at least 3 characters",
      },
      message: "invalid input",
    };
  }

  const to = (formData?.get("to") as string) || "";
  if (to === "" || to.length < 3) {
    return {
      status: "invalid",
      invalid: {
        field: "to",
        errorMessage: "Type at least 3 characters",
      },
      message: "invalid input",
    };
  }

  const agreed = (formData.get("agreed") as unknown) === true ? true : false;

  const data = {
    to: to,
    fullName: fullName,
    agreed: agreed,
  };

  await wait(1000);
  const response = await sendEmail(data);

  if (response.ok) {
    // TODO modal window pop up
    return {
      status: "success",
      message: "Email sent successfully",
    };
  } else {
    return {
      status: "fail",
      message: "Failed to send email",
    };
  }
}

export default subscribe;

export async function sendEmail(
  data: NewsletterFormData,
): Promise<NextResponse> {
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
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
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
