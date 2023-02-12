import { FC } from "react";

const ComicsItem: FC<{ resourceURI: string; name: string }> = (item) => {
  const { resourceURI, name } = item;
  return <div className="">{name}</div>;
};

export default ComicsItem;
