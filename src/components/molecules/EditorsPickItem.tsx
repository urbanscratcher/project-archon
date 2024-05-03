import ListItemBox from "../atoms/ListItemBox";
import LinkedText from "./LinkedText";

function EditorsPickItem({ cover }: { cover: any }) {
  const data = {
    idx: cover.insight.idx,
    title: cover.insight.title,
    href: `/insights/${cover.insight.idx}`,
  };

  return (
    <ListItemBox>
      <LinkedText href={data.href} level={3} title={data.title} lineClamp={4} />
    </ListItemBox>
  );
}

export default EditorsPickItem;
