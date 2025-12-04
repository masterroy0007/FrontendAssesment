## Sales Dashboard (Next.js 15 + TypeScript + Tailwind + Recharts)

This project is a simple but production-ready **Sales Dashboard** built with:

- **Next.js 15 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Recharts**

It visualizes mock sales data for the years **2022, 2023, 2024** using **Bar**, **Line**, and **Pie** charts, and includes a **sales threshold filter** to explore the data interactively.

---

### Project Structure

- **`app/`**
  - `layout.tsx` – Root layout and global styling.
  - `page.tsx` – Redirects to the dashboard.
  - `dashboard/page.tsx` – Main Sales Dashboard page (client component).
- **`components/`**
  - `BarChartComponent.tsx` – Bar chart for sales by year.
  - `LineChartComponent.tsx` – Line chart for sales trend.
  - `PieChartComponent.tsx` – Pie chart for sales distribution.
  - `SalesFilter.tsx` – Threshold input and filtered list.
- **`data/`**
  - `salesData.ts` – Mock sales data for 2022–2024.

---

### Features

- **Sales Dashboard page**
  - Title: **“Sales Dashboard”**
  - Sections: **Filter**, **Bar Chart**, **Line Chart**, **Pie Chart**
  - Responsive grid layout using Tailwind CSS.

- **Charts (Recharts)**
  - **BarChartComponent**
    - Bar chart of sales by year.
    - Blue bars (`#2563EB`).
  - **LineChartComponent**
    - Line chart of sales trend.
    - Green line (`#16A34A`).
  - **PieChartComponent**
    - Sales distribution over the 3 years.
    - Colors: `#2563EB`, `#F59E0B`, `#16A34A`.

- **SalesFilter**
  - Input field for **minimum sales threshold**.
  - Filters the mock `salesData` in real time.
  - Displays the **filtered list** of years and sales.
  - Filtered data is also used as input for the charts (fallback to full data if no rows match).

---

### Prerequisites

- **Node.js** 18+ (recommended: latest LTS)
- **npm** (or **yarn** / **pnpm**, adjust commands accordingly)

---

### Installation

From the project root (`Frontend Assesment`):

```bash
npm install
```

If you prefer to install Tailwind CSS and Recharts explicitly, you can also run:

```bash
npm install recharts
npm install -D tailwindcss postcss autoprefixer
```

> Note: The dependencies are already listed in `package.json`, so a single `npm install` is sufficient.

---

### Tailwind CSS Setup (already configured)

The project is already wired for Tailwind:

- `tailwind.config.ts` – Tailwind configuration with `app/` and `components/` in `content`.
- `postcss.config.mjs` – PostCSS configuration.
- `app/globals.css` – Includes Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`).
- `app/layout.tsx` – Imports `./globals.css`.

If you were setting this up from scratch, the Tailwind init command would be:

```bash
npx tailwindcss init -p
```

---

### Running the Development Server

```bash
npm run dev
```

Then open your browser at:

```text
http://localhost:3000
```

The root route (`/`) redirects to:

```text
/dashboard
```

---

### Production Build

```bash
npm run build
npm start
```

---

### GitHub Workflow (example)

Initialize Git and push the project to a new GitHub repository:

```bash
git init
git add .
git commit -m "Initial commit: Sales dashboard with Next.js, Tailwind, and Recharts"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

Replace `<your-username>` and `<your-repo-name>` with your own values.

---

### Deploying to Vercel

1. **Install Vercel CLI (optional but convenient):**

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**

   ```bash
   vercel login
   ```

3. **Deploy (from project root):**

   ```bash
   vercel
   ```

   - Follow the interactive prompts.
   - Vercel will detect **Next.js** automatically.

4. **For subsequent deployments:**

   ```bash
   vercel --prod
   ```

Alternatively, you can:

- Push the project to GitHub.
- Go to the Vercel dashboard.
- **“Import Project”** from GitHub.
- Select this repository and accept the default Next.js settings.

Vercel will:

- Install dependencies.
- Run `npm run build`.
- Deploy the optimized production build.

---

### Useful Commands Summary

- **Install dependencies**

  ```bash
  npm install
  ```

- **Install Tailwind (if needed)**

  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```

- **Install Recharts (if needed)**

  ```bash
  npm install recharts
  ```

- **Run dev server**

  ```bash
  npm run dev
  ```

- **Build for production**

  ```bash
  npm run build
  ```

- **Start production server**

  ```bash
  npm start
  ```

- **GitHub push (first time)**

  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  git branch -M main
  git remote add origin https://github.com/<your-username>/<your-repo-name>.git
  git push -u origin main
  ```

- **Vercel deploy (CLI)**

  ```bash
  vercel        # first time
  vercel --prod # later production deployments
  ```

---

### Notes

- The dashboard is built using **atomic components**, making it easy to extend (e.g., add more charts or filters).
- For real data, replace `data/salesData.ts` with API calls or database queries and pass the data into the components in the same shape.


