import client from "./client";
import { isTypeChoice, TypeChoiceSkeleton } from "./contentTypes";

export const getAll = async () => {
  const response = await client.getEntries<TypeChoiceSkeleton>({
    content_type: "choice",
  });
  return response.items;
};

export const get = async (id: string) => {
  const response = await client.getEntry<TypeChoiceSkeleton>(id);

  if (isTypeChoice(response)) {
    return response.fields;
  }
  return null;
};
