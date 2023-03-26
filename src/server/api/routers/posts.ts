// import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// This runs on the server
export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
});
