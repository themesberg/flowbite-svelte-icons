import { SvelteComponent } from "svelte";
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
export type AdjustmentsVerticalSolidProps = typeof __propDef.props;
export type AdjustmentsVerticalSolidEvents = typeof __propDef.events;
export type AdjustmentsVerticalSolidSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
 * ## Props
 * @props: size?: "xs" | "sm" | "md" | "lg" | "xl";
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?: string;
 */
export default class AdjustmentsVerticalSolid extends SvelteComponent<AdjustmentsVerticalSolidProps, AdjustmentsVerticalSolidEvents, AdjustmentsVerticalSolidSlots> {
}
export {};
