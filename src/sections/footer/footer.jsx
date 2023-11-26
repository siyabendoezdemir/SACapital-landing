function FooterSection() {
  return (
    <footer class="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">
        Footer
      </h2>

      <div class="px-4 py-12 mx-auto bg-gray-900 max-w-7xl sm:px-6 lg:px-16">
        <div class="flex flex-wrap items-baseline lg:justify-center">
          <span class="mt-2 text-sm font-light text-gray-500">
            Copyright © 2023
            <a
              href="https://twitter.com/Sacapitalco"
              class="mx-2 text-wickedblue hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              @SACapitalCo
            </a>
            . Since 2023
          </span>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
