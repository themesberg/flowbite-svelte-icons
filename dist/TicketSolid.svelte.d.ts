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
export type TicketSolidProps = typeof __propDef.props;
export type TicketSolidEvents = typeof __propDef.events;
export type TicketSolidSlots = typeof __propDef.slots;
export default class TicketSolid extends SvelteComponentTyped<TicketSolidProps, TicketSolidEvents, TicketSolidSlots> {
}
export {};
