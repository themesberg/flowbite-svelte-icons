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
export type AngleRightSolidProps = typeof __propDef.props;
export type AngleRightSolidEvents = typeof __propDef.events;
export type AngleRightSolidSlots = typeof __propDef.slots;
export default class AngleRightSolid extends SvelteComponentTyped<AngleRightSolidProps, AngleRightSolidEvents, AngleRightSolidSlots> {
}
export {};
