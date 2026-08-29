const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/styles/button.css');
let content = fs.readFileSync(targetFile, 'utf8');

const newButtonStyles = `/* =========================
NextSaaS Buttons Styles
=========================== */
@utility btn {
  @apply relative overflow-hidden rounded-full cursor-pointer inline-flex items-center justify-center text-center transition-all duration-300 ease-in-out font-bold text-nowrap hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(6,18,37,0.15)];
}

/* btn color variants */
@utility btn-primary {
  @apply bg-secondary shadow-sm border border-[#142646] text-white;
}

@utility btn-white {
  @apply bg-white border-stroke-3 shadow-sm text-secondary;
}

@utility btn-white-dark {
  @apply bg-background-6 border-stroke-7 shadow-sm text-accent;
}

@utility btn-white-v2 {
  @apply bg-white border-stroke-3 shadow-sm text-secondary;
}

@utility btn-accent {
  @apply bg-accent border-stroke-3 shadow-sm text-secondary;
}

@utility btn-ash {
  @apply bg-background-12 text-secondary;
}

@utility btn-secondary {
  @apply shadow-sm bg-secondary border border-[#142646] text-white hover:bg-black;
}

@utility btn-secondary-v2 {
  @apply shadow-sm bg-background-5 border-stroke-7 text-accent;
}

@utility btn-transparent {
  @apply bg-transparent border-stroke-7 text-accent;
}

@utility btn-green {
  @apply bg-ns-green border border-[#20b21e] text-white shadow-sm hover:bg-[#20b21e] hover:shadow-[0_15px_30px_rgba(37,202,34,0.3)];
}

@utility btn-dark {
  @apply bg-accent/10 border-0 shadow-sm text-accent;
}

@utility btn-black {
  @apply bg-black border-0 shadow-sm text-accent hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)];
}

@utility btn-light {
  @apply bg-background-1 border-0 shadow-sm text-secondary;
}

@utility btn-gray {
  @apply bg-background-4 border-none text-secondary font-medium;
}

/* btn size variants */
@utility btn-sm {
  @apply px-5 py-2 text-sm;
}

@utility btn-base {
  @apply px-6 py-3 text-[15px];
}

@utility btn-md {
  @apply px-7 py-3.5 text-[15px] min-w-[120px];
}

@utility btn-lg {
  @apply px-8 py-4 text-[16px];
}

@utility btn-xl {
  @apply px-10 py-5 text-[16px];
}

/* button v2  */

@utility btn-sm-v2 {
  @apply px-5 py-2 text-sm;
}

@utility btn-base-v2 {
  @apply px-6 py-3 text-[15px] h-[48px];
}

@utility btn-md-v2 {
  @apply px-7 py-3.5 text-[15px] min-w-[120px];
  .btn-v2-icon {
    @apply mt-px;
  }
}

@utility btn-lg-v2 {
  @apply px-8 py-4 text-[16px];
}

@utility btn-xl-v2 {
  @apply px-10 py-5 text-[16px] h-[58px];
}

/* color variants v2 */
@utility btn-primary-v2 {
  @apply bg-secondary text-white border border-[#142646] hover:bg-black;
  .btn-v2-icon {
    @apply fill-white;
  }
}

@utility btn-secondary-v2 {
  @apply bg-secondary text-white shadow-sm border border-[#142646] hover:bg-black;
  .btn-v2-icon {
    @apply fill-white;
  }
}

@utility btn-v2-white {
  @apply bg-white text-secondary border border-stroke-3 hover:border-stroke-1;
  .btn-v2-icon {
    @apply fill-secondary;
  }
}

@utility btn-gray-v2 {
  @apply bg-background-1 text-secondary shadow-sm hover:bg-white;
  .btn-v2-icon {
    @apply fill-secondary;
  }
}

@utility btn-green-v2 {
  @apply bg-ns-green text-white shadow-sm hover:bg-[#20b21e] hover:shadow-[0_15px_30px_rgba(37,202,34,0.3)];
  .btn-v2-icon {
    @apply fill-white;
  }
}

@utility btn-ash-v2 {
  @apply bg-background-4 text-secondary shadow-sm hover:bg-background-3;
  .btn-v2-icon {
    @apply fill-secondary;
  }
}

@utility btn-stone-v2 {
  @apply bg-background-12 text-secondary hover:bg-background-11;
  .btn-v2-icon {
    @apply fill-secondary;
  }
}
`;

fs.writeFileSync(targetFile, newButtonStyles);
console.log('Button styles updated.');
