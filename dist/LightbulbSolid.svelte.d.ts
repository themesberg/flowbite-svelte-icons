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
export type LightbulbSolidProps = typeof __propDef.props;
export type LightbulbSolidEvents = typeof __propDef.events;
export type LightbulbSolidSlots = typeof __propDef.slots;
export default class LightbulbSolid extends SvelteComponentTyped<LightbulbSolidProps, LightbulbSolidEvents, LightbulbSolidSlots> {
}
export {};
