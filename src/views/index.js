const views = {}

views.login = () => {
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <title>Login</title>
    </head>
    <body class="m-0 p-0">
      <article class="w-screen h-screen bg-neutral-200 flex flex items-center justify-center">
        <section class="p-9 bg-neutral-50 rounded sm:max-w-[90%] md:max-w-[75%] lg:max-w-[60%] shadow-md">
          <h1 class="text-blue-950 text-4xl font-black font-serif">LibMaS</h1>
          <p>Welcome to LibMaS (<strong>Lib</strong>rary <strong>Ma</strong>nagement <strong>S</strong>ystem), the library management system API of the future. To know more about your access rights please choose your authentication method or click the api documentation button to go to the API Documentation page.</p>
          <hr class="m-6">
          <section class="flex items-center justify-center w-100 gap-5">
            <a href="/auth/google" class="gap-2 p-2 border border-neutral-400 rounded shadow-sm hover:shadow-md">
              <svg viewBox="0 0 128 128" width="20px" height="20px" class="inline-block">
                <path fill="#fff" d="M44.59 4.21a63.28 63.28 0 004.33 120.9 67.6 67.6 0 0032.36.35 57.13 57.13 0 0025.9-13.46 57.44 57.44 0 0016-26.26 74.33 74.33 0 001.61-33.58H65.27v24.69h34.47a29.72 29.72 0 01-12.66 19.52 36.16 36.16 0 01-13.93 5.5 41.29 41.29 0 01-15.1 0A37.16 37.16 0 0144 95.74a39.3 39.3 0 01-14.5-19.42 38.31 38.31 0 010-24.63 39.25 39.25 0 019.18-14.91A37.17 37.17 0 0176.13 27a34.28 34.28 0 0113.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0087.2 4.59a64 64 0 00-42.61-.38z"></path><path fill="#e33629" d="M44.59 4.21a64 64 0 0142.61.37 61.22 61.22 0 0120.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 00-13.64-8 37.17 37.17 0 00-37.46 9.74 39.25 39.25 0 00-9.18 14.91L8.76 35.6A63.53 63.53 0 0144.59 4.21z"></path><path fill="#f8bd00" d="M3.26 51.5a62.93 62.93 0 015.5-15.9l20.73 16.09a38.31 38.31 0 000 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 01-5.5-40.9z"></path><path fill="#587dbd" d="M65.27 52.15h59.52a74.33 74.33 0 01-1.61 33.58 57.44 57.44 0 01-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0012.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"></path><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0044 95.74a37.16 37.16 0 0014.08 6.08 41.29 41.29 0 0015.1 0 36.16 36.16 0 0013.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 01-25.9 13.47 67.6 67.6 0 01-32.36-.35 63 63 0 01-23-11.59A63.73 63.73 0 018.75 92.4z"></path>
              </svg> Google
            </a>
            <a href="/api-docs" class="gap-2 p-2 border border-neutral-400 rounded shadow-sm hover:shadow-md">
              <svg viewBox="0 0 128 128" width="20px" height="20px" class="inline-block">
              <path fill="#85ea2d" d="M63.999 124.945c-33.607 0-60.95-27.34-60.95-60.949C3.05 30.388 30.392 3.048 64 3.048s60.95 27.342 60.95 60.95c0 33.607-27.343 60.946-60.95 60.946z"></path><path fill="#173647" d="M40.3 43.311c-.198 2.19.072 4.454-.073 6.668-.173 2.217-.444 4.407-.888 6.596-.615 3.126-2.56 5.489-5.24 7.458 5.218 3.396 5.807 8.662 6.152 14.003.172 2.88.098 5.785.394 8.638.221 2.215 1.082 2.782 3.372 2.854.935.025 1.894 0 2.978 0v6.842c-6.768 1.156-12.354-.762-13.734-6.496a39.329 39.329 0 0 1-.836-6.4c-.148-2.287.097-4.577-.074-6.864-.492-6.277-1.305-8.393-7.308-8.689v-7.8c.441-.1.86-.174 1.302-.223 3.298-.172 4.701-1.182 5.414-4.43a37.512 37.512 0 0 0 .616-5.536c.247-3.569.148-7.21.763-10.754.86-5.094 4.01-7.556 9.254-7.852 1.476-.074 2.978 0 4.676 0v6.99c-.714.05-1.33.147-1.969.147-4.258-.148-4.48 1.304-4.8 4.848zm8.195 16.193h-.099c-2.462-.123-4.578 1.796-4.702 4.258-.122 2.485 1.797 4.603 4.259 4.724h.295c2.436.148 4.527-1.724 4.676-4.16v-.245c.05-2.486-1.944-4.527-4.43-4.577zm15.43 0c-2.386-.074-4.38 1.796-4.454 4.159 0 .149 0 .271.024.418 0 2.684 1.821 4.406 4.578 4.406 2.707 0 4.406-1.772 4.406-4.553-.025-2.682-1.823-4.455-4.554-4.43Zm15.801 0a4.596 4.596 0 0 0-4.676 4.454 4.515 4.515 0 0 0 4.528 4.528h.05c2.264.394 4.553-1.796 4.701-4.429.122-2.437-2.092-4.553-4.604-4.553Zm21.682.369c-2.855-.123-4.284-1.083-4.996-3.79a27.444 27.444 0 0 1-.811-5.292c-.198-3.298-.174-6.62-.395-9.918-.516-7.826-6.177-10.557-14.397-9.205v6.792c1.304 0 2.313 0 3.322.025 1.748.024 3.077.69 3.249 2.634.172 1.772.172 3.568.344 5.365.346 3.57.542 7.187 1.157 10.706.542 2.904 2.536 5.07 5.02 6.841-4.355 2.929-5.636 7.113-5.857 11.814-.122 3.223-.196 6.472-.368 9.721-.148 2.953-1.181 3.913-4.16 3.987-.835.024-1.648.098-2.583.148v6.964c1.748 0 3.347.1 4.946 0 4.971-.295 7.974-2.706 8.96-7.531.417-2.658.662-5.34.737-8.023.171-2.46.148-4.946.394-7.382.369-3.815 2.116-5.389 5.93-5.636a5.161 5.161 0 0 0 1.06-.245v-7.801c-.64-.074-1.084-.148-1.552-.173zM64 6.1c31.977 0 57.9 25.92 57.9 57.898 0 31.977-25.923 57.899-57.9 57.899-31.976 0-57.898-25.922-57.898-57.9C6.102 32.023 32.024 6.101 64 6.101m0-6.1C28.71 0 0 28.71 0 64c0 35.288 28.71 63.998 64 63.998 35.289 0 64-28.71 64-64S99.289.002 64 .002Z"></path>
              </svg> Api Documentation
            </a>
          </section>
        </section>
    </body>
  </html>
  `
}

views.home = (profile) => {
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=logout" />
      <style>
        .material-symbols-outlined {
          font-variation-settings:
          'FILL' 0,
          'wght' 200,
          'GRAD' 0,
          'opsz' 8
        }
      </style>
      <title>Login</title>
    </head>
    <body class="m-0 p-0">
      <article class="w-screen h-screen bg-neutral-200 flex flex items-center justify-center">
        <section class="p-9 bg-neutral-50 rounded sm:max-w-[90%] md:max-w-[75%] lg:max-w-[60%] shadow-md">
          <h1 class="text-blue-950 text-4xl font-black font-serif">LibMaS</h1>
          <p>Welcome to LibMaS (<strong>Lib</strong>rary <strong>Ma</strong>nagement <strong>S</strong>ystem), the library management system API of the future.</p>
          <hr class="m-6">
          <section class="w-100">
            <section class="flex justify-between items-center pb-7">
              <p class="text-lg">Welcome ${profile.displayName} <span class="text-neutral-500">(${profile.role})</span></p>
              <a href="/auth/logout" class="flex items-center justify-center text-xs p-2 border border-red-400 rounded shadow-sm hover:shadow-md text-red-400"><span class="material-symbols-outlined">logout</span> Logout</a>
            </section>
            <p>With your current role you can send ${profile.role === "librarian" ? "get, post, put and delete" : "get"} requests to any endpoint including books, book items, authors, loans and users</p>
          </section>
          <hr class="m-6">
          <section class="flex items-center justify-center w-100">
            <a href="/api-docs" class="gap-2 p-2 border border-neutral-400 rounded shadow-sm hover:shadow-md">
              <svg viewBox="0 0 128 128" width="20px" height="20px" class="inline-block">
              <path fill="#85ea2d" d="M63.999 124.945c-33.607 0-60.95-27.34-60.95-60.949C3.05 30.388 30.392 3.048 64 3.048s60.95 27.342 60.95 60.95c0 33.607-27.343 60.946-60.95 60.946z"></path><path fill="#173647" d="M40.3 43.311c-.198 2.19.072 4.454-.073 6.668-.173 2.217-.444 4.407-.888 6.596-.615 3.126-2.56 5.489-5.24 7.458 5.218 3.396 5.807 8.662 6.152 14.003.172 2.88.098 5.785.394 8.638.221 2.215 1.082 2.782 3.372 2.854.935.025 1.894 0 2.978 0v6.842c-6.768 1.156-12.354-.762-13.734-6.496a39.329 39.329 0 0 1-.836-6.4c-.148-2.287.097-4.577-.074-6.864-.492-6.277-1.305-8.393-7.308-8.689v-7.8c.441-.1.86-.174 1.302-.223 3.298-.172 4.701-1.182 5.414-4.43a37.512 37.512 0 0 0 .616-5.536c.247-3.569.148-7.21.763-10.754.86-5.094 4.01-7.556 9.254-7.852 1.476-.074 2.978 0 4.676 0v6.99c-.714.05-1.33.147-1.969.147-4.258-.148-4.48 1.304-4.8 4.848zm8.195 16.193h-.099c-2.462-.123-4.578 1.796-4.702 4.258-.122 2.485 1.797 4.603 4.259 4.724h.295c2.436.148 4.527-1.724 4.676-4.16v-.245c.05-2.486-1.944-4.527-4.43-4.577zm15.43 0c-2.386-.074-4.38 1.796-4.454 4.159 0 .149 0 .271.024.418 0 2.684 1.821 4.406 4.578 4.406 2.707 0 4.406-1.772 4.406-4.553-.025-2.682-1.823-4.455-4.554-4.43Zm15.801 0a4.596 4.596 0 0 0-4.676 4.454 4.515 4.515 0 0 0 4.528 4.528h.05c2.264.394 4.553-1.796 4.701-4.429.122-2.437-2.092-4.553-4.604-4.553Zm21.682.369c-2.855-.123-4.284-1.083-4.996-3.79a27.444 27.444 0 0 1-.811-5.292c-.198-3.298-.174-6.62-.395-9.918-.516-7.826-6.177-10.557-14.397-9.205v6.792c1.304 0 2.313 0 3.322.025 1.748.024 3.077.69 3.249 2.634.172 1.772.172 3.568.344 5.365.346 3.57.542 7.187 1.157 10.706.542 2.904 2.536 5.07 5.02 6.841-4.355 2.929-5.636 7.113-5.857 11.814-.122 3.223-.196 6.472-.368 9.721-.148 2.953-1.181 3.913-4.16 3.987-.835.024-1.648.098-2.583.148v6.964c1.748 0 3.347.1 4.946 0 4.971-.295 7.974-2.706 8.96-7.531.417-2.658.662-5.34.737-8.023.171-2.46.148-4.946.394-7.382.369-3.815 2.116-5.389 5.93-5.636a5.161 5.161 0 0 0 1.06-.245v-7.801c-.64-.074-1.084-.148-1.552-.173zM64 6.1c31.977 0 57.9 25.92 57.9 57.898 0 31.977-25.923 57.899-57.9 57.899-31.976 0-57.898-25.922-57.898-57.9C6.102 32.023 32.024 6.101 64 6.101m0-6.1C28.71 0 0 28.71 0 64c0 35.288 28.71 63.998 64 63.998 35.289 0 64-28.71 64-64S99.289.002 64 .002Z"></path>
              </svg> Api Documentation
            </a>
          </section>
        </section>
 
    </body>
  </html>
  `
}

module.exports = views