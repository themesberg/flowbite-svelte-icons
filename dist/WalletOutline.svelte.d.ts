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
export type WalletOutlineProps = typeof __propDef.props;
export type WalletOutlineEvents = typeof __propDef.events;
export type WalletOutlineSlots = typeof __propDef.slots;
export default class WalletOutline extends SvelteComponentTyped<WalletOutlineProps, WalletOutlineEvents, WalletOutlineSlots> {
}
export {};
