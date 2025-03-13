import type { Component } from 'svelte';
import { type ListType, sidebarList } from 'runes-webkit';
import { PaletteOutline, RocketOutline } from '$lib';

export const extra: ListType[] = [
  {
    name: 'Solid Icons',
    Icon: RocketOutline as Component,
    href: '/solid-icons'
  },
  {
    name: 'Outline Icons',
    Icon: PaletteOutline as Component,
    href: '/outline-icons'
  }
];

export const newSidebarList: ListType[] = [
	...(Array.isArray(sidebarList) ? sidebarList : []),
	...extra
];