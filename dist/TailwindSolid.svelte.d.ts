import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
        role?: string | undefined;
        class?: string | undefined;
        ariaLabel?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TailwindSolidProps = typeof __propDef.props;
export type TailwindSolidEvents = typeof __propDef.events;
export type TailwindSolidSlots = typeof __propDef.slots;
export default class TailwindSolid extends SvelteComponentTyped<TailwindSolidProps, TailwindSolidEvents, TailwindSolidSlots> {
}
export {};
