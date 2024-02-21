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
export type WalletSolidProps = typeof __propDef.props;
export type WalletSolidEvents = typeof __propDef.events;
export type WalletSolidSlots = typeof __propDef.slots;
export default class WalletSolid extends SvelteComponentTyped<WalletSolidProps, WalletSolidEvents, WalletSolidSlots> {
}
export {};
