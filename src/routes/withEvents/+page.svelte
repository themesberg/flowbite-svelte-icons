<script>
  import { AddressBookOutline, ArchiveSolid, HeartSolid } from '$lib';
</script>

<HeartSolid />

A11y
<HeartSolid
  title={{ id: 'my-title', title: 'Red heart' }}
  desc={{ id: 'my-descrip', desc: 'The shape of a red heart' }}
  ariaLabel="red heart"
  color="red"
/>

<HeartSolid title={{ id: 'my-title2', title: 'Red heart 2' }} ariaLabel="red heart" color="red" />

tabindex
<AddressBookOutline tabindex="0" />
<ArchiveSolid tabindex="0" />

withEvents
<AddressBookOutline withEvents />
<ArchiveSolid withEvents transform="rotate(45)" />
