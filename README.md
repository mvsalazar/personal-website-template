# Personal Website

A modern, fast, and responsive personal website template for any professional who wants to showcase their experience, projects and intersts in a stylish, modern and clean site. Built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [TypeScript](https://www.typescriptlang.org/). Deployed seamlessly to GitHub Pages using GitHub Actions.

---
## 📀 Data

Since this site is designed to be hosted on a free GitHub Pages account, it functions as a static site.
To keep things simple yet flexible, all content is stored in a structured JSON file located at `src/data/personalInfo.json`.

You can edit this file directly to update your personal information.
For faster setup, you can give the template `JSON` and your resume to ChatGPT (or another LLM) to generate your own data in the correct format.

Because the data is structured, it’s also easy to scale. If you decide to pull content from a database or API in the future, you can adapt the existing format with minimal changes.

### 📸 Profile picture
In the directory `src/assets` ensure that you replace the `profile_picture.png` file with your own profile picture. The name needs to be the same. 


---
## 🚀 Features

- ⚡️ Fast bundling with Vite
- ⚛️ React for UI components
- 🔒 TypeScript for type safety
- 🎨 TailwindCSS for styling
- 🖼️ Image and static asset support
- 🌐 Deployed automatically on push to `main`

---

## 📦 Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **Build Tool**: Vite
- **Deployment**: GitHub Pages via GitHub Actions

---

## 🛠️ Local Development

### Prerequisites

- Node.js 20+

### Install Dependencies

```bash
npm install
```

### Start Dev Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 🚚 Deployment

Deployment is handled automatically by GitHub Actions whenever changes are pushed to the `main` branch.

### CI Deploy (GitHub Actions)

GitHub Actions uses the following command for deployment:

```bash
npm run deploy:ci
```

This runs:

```json
"deploy:ci": "gh-pages -d dist -u \"github-actions-bot <support+actions@github.com>\" -r https://x-access-token:${GITHUB_TOKEN}@github.com/{{YOUR_GITHUB_USER_NAME}}/personal-website-template.git"
```
> IMPORTANT: In your `package.json`, insure that you update `{{YOUR_GITHUB_USER_NAME}}` with your own git user name. If you rename the forked repo, you will need to also update the script to replace `personal-website-template.git` to the new repo name. 

> Note: `${GITHUB_TOKEN}` is automatically provided by GitHub Actions.

### Manual Deploy (Local)

To deploy manually from your local machine:

```bash
npm run deploy
```

This runs:

```json
"deploy": "gh-pages -d dist"
```

Make sure you have proper GitHub authentication configured locally (e.g., via SSH or a GitHub CLI session).

### Pages Setup
* In your forked github repo, go to `Settings`. 
* On the left column click on `Pages`.
* Under `Build and deployment` the source should be `Deploy from branch`.
* On the `Branch` section, select the `gh-pages` branch and click save.

![alt text](image.png)

After these updates, do a manual deploy from your terminal by running: 

```bash
npm run deploy
```

> Note: The main branch is not protected. After your initial deploy, after push to your main branch an automatic deploy will run. 

---

## 📁 Project Structure

```
.
├── .github/
│   ├── workflows           # GitHub Actions workflows
│   │   └──  deploy.yml
├── public/                 # Static public assets
├── src/                    # Source code
│   ├── assets/             # Images and media
│   ├── components/         # Reusable React components
│   ├── App.tsx             # Root component
│   └── main.tsx            # Entry point
├── data/
│   └──  personalInfo.json
├── test/
│   └──  setup.ts
├── vite.config.ts          # Vite configuration
├── package.json            # NPM scripts and dependencies
└── tsconfig.json           # TypeScript config
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♂️ Author

Built by [Melvin Salazar](https://github.com/msalazar) — feel free to reach out with questions or improvements!

