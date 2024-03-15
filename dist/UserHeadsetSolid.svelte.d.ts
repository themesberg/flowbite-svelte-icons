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
export type UserHeadsetSolidProps = typeof __propDef.props;
export type UserHeadsetSolidEvents = typeof __propDef.events;
export type UserHeadsetSolidSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
 * ## Props
 * @props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?:  string; = 'user headset solid,';
 */
export default class UserHeadsetSolid extends SvelteComponent<UserHeadsetSolidProps, UserHeadsetSolidEvents, UserHeadsetSolidSlots> {
}
export {};
