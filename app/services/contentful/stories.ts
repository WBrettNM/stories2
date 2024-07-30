import client from "./client";
import { TypeStorySkeleton } from "./contentTypes";

export const getAll = async () => {
  const response = await client.getEntries<TypeStorySkeleton>({
    content_type: "story",
  });
  return response.items;
};

export const get = async (id: string) => {
  const response = await client.getEntry<TypeStorySkeleton>(id);
  if (response.sys.contentType.sys.id === "story") {
    return response.fields;
  }
  return null;
};
