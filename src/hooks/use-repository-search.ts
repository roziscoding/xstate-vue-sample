import { assign, createMachine, DoneInvokeEvent } from "xstate";
import { useMachine } from "@xstate/vue";
import { Repository, searchRepositories } from "../github";

type Context = {
  results: Repository[];
  error: string;
};

type SuccessEvent = DoneInvokeEvent<Repository[]>;
type ErrorEvent = DoneInvokeEvent<Error>;

export function useRepositorySearch() {
  const searchMachine = createMachine(
    {
      id: "search-machine",
      initial: "idle",
      context: { results: [], error: "" } as Context,
      states: {
        idle: {
          on: {
            SEARCH: "loading",
          },
          entry: "resetContext",
        },
        success: {
          on: {
            SEARCH: "loading",
            RESET: "idle",
          },
        },
        error: {
          on: {
            SEARCH: "loading",
            RESET: "idle",
          },
        },
        loading: {
          invoke: {
            id: "searchRepositories",
            src: (_, event) => searchRepositories(event.data),
            onDone: {
              target: "success",
              actions: assign<Context, SuccessEvent>({
                results: (_, event) => event.data,
              }),
            },
            onError: {
              target: "error",
              actions: assign<Context, ErrorEvent>({
                error: (_, event) => `${event.data}`,
              }),
            },
          },
        },
      },
    },
    {
      actions: {
        resetContext: assign<Context>({ results: [], error: "" }),
      },
    },
  );

  const { state, send } = useMachine(searchMachine);

  const search = (query: string) => send({ type: "SEARCH", data: query });
  const reset = () => send({ type: "RESET" });

  return { state, search, reset };
}
