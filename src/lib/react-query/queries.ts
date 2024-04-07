import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";

import { INewPost, INewUser, IUpdatePost, IUpdateUser } from "@/types";
import {
  createPost,
  createUserAccount,
  signInAccount,
  signOutAccount,
} from "../appwrite/appwrite";

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};

export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: signOutAccount,
  });
};

export const useCreatePost = () => {
  return useMutation({
    mutationFn: createPost
  })
}