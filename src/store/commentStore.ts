import { create } from "zustand";

export type CommentType = {
  id: number;
  username: string;
  commentText: string;
  likes: number;
  dislikes: number;
  parentCommentId?: number;
  subComments?: CommentType[];
};

type CommentsState = {
  newComment: string;
  showInputId: number | null;
  comments: CommentType[];
  setNewComment: (newComment: string) => void;
  setShowInputId: (id: number | null) => void;
  likeComment: (isSubComment: boolean, commentId: number) => void;
  dislikeComment: (isSubComment: boolean, commentId: number) => void;
  handleAddComment: () => void;
  handleAddSubComment: (parentId: number, newComment: string) => void;
};

// Create the Zustand store
export const useCommentsStore = create<CommentsState>((set) => ({
  newComment: "",
  showInputId: null,
  comments: [
    {
      id: 1,
      username: "abey asmare",
      commentText: "hello world",
      likes: 2,
      dislikes: 1,
      subComments: [
        {
          id: 3,
          parentCommentId: 1,
          username: "abey asmare",
          commentText: "hello world",
          likes: 2,
          dislikes: 1,
        },
        {
          id: 5,
          parentCommentId: 1,
          username: "abey asmare",
          commentText: "hello world",
          likes: 2,
          dislikes: 1,
        },
      ],
    },
    {
      id: 2,
      username: "abey asmare",
      commentText: "hello world",
      likes: 2,
      dislikes: 1,
      subComments: [
        {
          id: 6,
          parentCommentId: 2,
          username: "abey asmare",
          commentText: "hello world",
          likes: 2,
          dislikes: 1,
        },
        {
          id: 7,
          parentCommentId: 2,
          username: "abey asmare",
          commentText: "hello world",
          likes: 2,
          dislikes: 1,
        },
      ],
    },
  ],

  setNewComment: (newComment) => set({ newComment }),
  setShowInputId: (id) => set({ showInputId: id }),

  likeComment: (isSubComment: boolean, commentId: number) =>
    set((state) => ({
      comments: state.comments.map((c) =>
        isSubComment
          ? {
              ...c,
              subComments: c.subComments?.map((sc) =>
                sc.id === commentId ? { ...sc, likes: sc.likes + 1 } : sc
              ),
            }
          : c.id === commentId
          ? { ...c, likes: c.likes + 1 }
          : c
      ),
    })),
  dislikeComment: (isSubComment: boolean, commentId: number) =>
    set((state) => ({
      comments: state.comments.map((c) =>
        isSubComment
          ? {
              ...c,
              subComments: c.subComments?.map((sc) =>
                sc.id === commentId ? { ...sc, dislikes: sc.dislikes + 1 } : sc
              ),
            }
          : c.id === commentId
          ? { ...c, dislikes: c.dislikes + 1 }
          : c
      ),
    })),

  handleAddComment: () =>
    set((state) => ({
      comments: [
        ...state.comments,
        {
          id: Math.random() * 1000,
          username: "username",
          commentText: state.newComment,
          likes: 0,
          dislikes: 0,
          subComments: [],
        },
      ],
      newComment: "",
    })),

  handleAddSubComment: (parentId, newComment) =>
    set((state) => ({
      comments: state.comments.map((c) =>
        c.id === parentId
          ? {
              ...c,
              subComments: [
                ...(c.subComments || []),
                {
                  id: Math.random() * 1000 + parentId,
                  parentCommentId: parentId,
                  username: "abey asmare",
                  commentText: newComment,
                  likes: 0,
                  dislikes: 0,
                },
              ],
            }
          : c
      ),
      showInputId: null,
    })),
}));
