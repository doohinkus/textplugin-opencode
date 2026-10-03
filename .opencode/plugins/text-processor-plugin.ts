import type { Plugin } from "@opencode-ai/plugin";

export const TextProcessorPlugin: Plugin = async ({
  project,
  client,
  $,
  directory,
  worktree,
}) => {
  await client.app.log({
    body: {
      service: "text-processor-plugin",
      level: "info",
      message: "Text Processor plugin initialized",
    },
  });

  return {
    "tool.execute.before": async (input) => {
      if (input.tool === "read") {
        await client.app.log({
          body: {
            service: "text-processor-plugin",
            level: "info",
            message:
              "Consider a text-analysis workflow after loading long documents.",
          },
        });
      }
    },
  };
};
