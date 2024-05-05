import List from "@/components/atoms/List";
import ListItem from "@/components/atoms/ListItem";
import LinkText from "@/components/molecules/LinkText";

function SettingPage() {
  const data = [
    {
      idx: 1,
      href: "href1",
      title: "title",
    },
    { idx: 2, href: "href2", title: "title2" },
  ];
  return (
    <main className="flex h-[50vh] min-h-[400px] flex-col items-center justify-center py-[96px] text-sky-700 lg:flex-row">
      Under Construction 🚧
    </main>
  );
}

export default SettingPage;
