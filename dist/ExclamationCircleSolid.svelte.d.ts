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
export type ExclamationCircleSolidProps = typeof __propDef.props;
export type ExclamationCircleSolidEvents = typeof __propDef.events;
export type ExclamationCircleSolidSlots = typeof __propDef.slots;
export default class ExclamationCircleSolid extends SvelteComponentTyped<ExclamationCircleSolidProps, ExclamationCircleSolidEvents, ExclamationCircleSolidSlots> {
}
export {};
