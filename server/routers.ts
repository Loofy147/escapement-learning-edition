import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { getLearnerProgress, upsertLearnerProgress, getLearnerLearningState, upsertLearnerLearningState } from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  progress: router({
    get: protectedProcedure.query(({ ctx }) => getLearnerProgress(ctx.user.id)),
    upsert: protectedProcedure.input(z.object({ state: z.string().max(200000) })).mutation(({ ctx, input }) => upsertLearnerProgress({ userId: ctx.user.id, state: input.state })),
  }),
  learning: router({
    get: protectedProcedure.query(({ ctx }) => getLearnerLearningState(ctx.user.id)),
    upsert: protectedProcedure.input(z.object({ state: z.string().max(100000) })).mutation(({ ctx, input }) => upsertLearnerLearningState(ctx.user.id, input.state)),
  }),
});

export type AppRouter = typeof appRouter;
