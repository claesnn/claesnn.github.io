<script>
  import "../app.css";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Github, Link, LinkedinIcon } from 'lucide-svelte'

  let open = false;

  const toggleOpen = () => {
    open = !open;
    document.body.style.overflow = open ? "hidden" : "auto";
  };

  const closeMenu = () => {
    open = false;
    document.body.style.overflow = "auto";
  };
</script>

<div class="border-b">
  <header class='p-5 max-w-7xl mx-auto flex items-center flex-wrap space-y-3'>
    <div class='lg:mr-10'>
      <a
        on:click={closeMenu}
        href='/'>
        <h1 class=" text-2xl font-bold">
          Claes Nymand Nilsson
        </h1>
        <p class='text-lg'>Biotech & Software</p>
      </a>
    </div>
    <div class='flex justify-between flex-grow'>
      <nav class='hidden lg:block'>
        <a href='/about'>
          <Button variant='ghost'>About</Button>
        </a>
        <a href='/projects'>
          <Button variant='ghost'>Projects</Button>
        </a>
        <a href='/photography'>
          <Button variant='ghost'>Photography</Button>
        </a>
        <a href='/contact'>
          <Button variant='ghost'>Contact</Button>
        </a>
      </nav>
    </div>
    <div class='flex items-center'>
      <div class='flex'>
        <Button variant='ghost'
          type='button'
          aria-label="Open menu"
          aria-expanded={open}
          on:click={toggleOpen}
          class='lg:hidden'
          >
          <div class='grid place-content-center w-8 h-12 mx-auto cursor-pointer'>
            <div
              class={`w-8 rounded-full transition-all duration-150 before:content-[''] before:absolute before:w-8 before:h-0.5 before:bg-slate-800 before:rounded-full
              before:transition-all
              before:-translate-x-4
              before:duration-150
              after:content-['']
              after:absolute
              after:w-8
              after:h-0.5
              after:bg-slate-800
              after:rounded-full
              after:-translate-x-4
              after:transition-all
              after:duration-150 ${
                open
                  ? "h-0 bg-white before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45"
                  : "h-0.5 bg-slate-800 before:-translate-y-1 after:translate-y-1"
              }`}></div>
          </div>
        </Button>
        <div class='hidden lg:block'>
          <a href='https://github.com/claesnn'>
            <Button variant='ghost' aria-label="Github">
              <Github />
            </Button>
          </a>
          <a href='https://aedin.com/in/claesnn' aria-label="LinkedIn">
            <Button variant='ghost'>
              <LinkedinIcon />
            </Button>
          </a>
        </div>
      </div>
    </div>
  </header>
</div>
<div
  class={`w-full h-screen  ${open ? "block" : "hidden"}`}
  id='side-menu'>
  <div class='flex flex-col h-full p-5'>
    <a href='/about'>
      <Button
        on:click={closeMenu}
        variant='ghost'>
        About
      </Button>
    </a>
    <a href='/projects'>
      <Button
        on:click={closeMenu}
        variant='ghost'>
        Projects
      </Button>
    </a>
    <a href='/photography'>
      <Button
        on:click={closeMenu}
        variant='ghost'>
        Photography
      </Button>
    </a>
    <a href='/contact'>
      <Button
        on:click={closeMenu}
        variant='ghost'>
        Contact
      </Button>
    </a>
    <a href='https://github.com/claesnn'>
      <Button
        on:click={closeMenu}
        variant='ghost'
         aria-label="Github">
        <Github />
      </Button>
    </a>
    <a href='https://aedin.com/in/claesnn'>
      <Button
        on:click={closeMenu}
        variant='ghost'
         aria-label="LinkedIn">
        <LinkedinIcon />  
      </Button>
    </a>
  </div>
</div>
        <main class='max-w-7xl mx-auto p-5'><slot /></main>
  <footer class='border-t bottom-0 absolute h-12 w-full'>
    <div class='max-w-7xl mx-auto py-2 px-5'>
      <p>
        Made by Claes Nymand Nilsson with SvelteKit
      </p>
    </div>
  </footer>