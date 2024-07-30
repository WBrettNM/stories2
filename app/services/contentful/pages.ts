import client from "./client";
import {
  isTypeChoice,
  isTypePage,
  TypePageSkeleton,
} from "./contentTypes";

export const getAll = async () => {
  const response = await client.getEntries<TypePageSkeleton>({
    content_type: "page",
  });
  return response.items;
};

export const get = async (id: string) => {
  const response = await client.getEntry<TypePageSkeleton>(id);

  if (isTypePage(response)) {
    // Filter out any mis-linked entries and lock in a better type
    const choice =
      response.fields.choice?.filter((entry) => isTypeChoice(entry)) ?? [];

    return {
      ...response.fields,
      choice,
    };
  }
  return null;
};
