# Community Nursing Set 3 Alumni Website

A responsive, static alumni website for Community Nursing Set 3, Kano State College of Nursing Sciences, Madobi Campus.

## Included
- `index.html` — homepage, class story, member directory, gallery panels, and footer
- `style.css` — responsive green, white, and gold design
- `script.js` — member search, profile popups, and mobile navigation
- `members.js` — 99 member records with profile image filenames
- `images/` — add member photos here

## Add member photos
Place each member's image inside the `images` folder using the filename assigned to their number:
- Member 1: `profile1.jpg`
- Member 2: `profile2.jpg`
- ...
- Member 99: `profile99.jpg`

Use `.jpg` filenames exactly as shown. If a photo is missing, the website displays initials instead of a broken image. Images are not included yet.

## Add optional profile details
Open `members.js`. Each member object currently contains `id`, `name`, `nickname`, and `image`. You can add optional fields such as:
- `state`
- `address`
- `motto`
- `interest`
- `careerGoal`
- `socialMedia`
- `message`

Example:
```js
{
  "id": 96,
  "name": "USAINI MIKA'ILU RABO",
  "nickname": "Mhussain",
  "image": "profile96.jpg",
  "state": "Kano",
  "motto": "One class, one legacy.",
  "interest": "Community health",
  "careerGoal": "To contribute to better community health services",
  "message": "May our unity continue beyond graduation."
}
```
Only publish personal information with the member's permission. Address and social links should be optional.

## Publish for free with GitHub Pages
1. Sign in to GitHub and create a new public repository, for example `community-nursing-set3-alumni`.
2. Upload all files and the `images` folder to the repository root. Keep `index.html`, `style.css`, `script.js`, and `members.js` together.
3. Open the repository's **Settings** → **Pages**.
4. Under build/deployment, select **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site. The published link will appear in the Pages settings.

## Before sharing
- Check that member names and nicknames are correct.
- The site currently lists 99 names, while the class overview uses the agreed figure of 100 expected graduates. Add the missing graduate to `members.js` when their name is confirmed, then update the member count and image naming if needed.
- Ask members for permission before publishing their photos or personal details.
- The website is public and does not have login or a private admin panel. Editing requires changing the files and uploading the updates to GitHub.
- The gallery blocks are decorative placeholders; replace them with approved class photos if desired.

## Website credit
Developed & designed by **Usaini Mika'ilu Rabo (Mhussain)**.
