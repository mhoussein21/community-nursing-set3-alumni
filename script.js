const grid = document.getElementById("membersGrid");
const searchInput = document.getElementById("memberSearch");
const visibleCount = document.getElementById("visibleCount");
const emptyState = document.getElementById("emptyState");
const modal = document.getElementById("profileModal");
const modalContent = document.getElementById("modalContent");

function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join("");
}
function safeImage(image, name, className = "avatar") {
  const alt = `${name} profile photo`;
  return `<div class="${className}"><img src="images/${encodeURIComponent(image)}" alt="${alt}" loading="lazy" onerror="this.parentElement.innerHTML='${initials(name)}';this.parentElement.classList.add('image-placeholder')"></div>`;
}
function renderMembers(query = "") {
  const normalized = query.trim().toLowerCase();
  const filtered = members.filter(member =>
    member.name.toLowerCase().includes(normalized) ||
    member.nickname.toLowerCase().includes(normalized)
  );
  visibleCount.textContent = filtered.length;
  emptyState.hidden = filtered.length !== 0;
  grid.innerHTML = filtered.map(member => `
    <button class="member-card" type="button" data-member-id="${member.id}" aria-label="Open profile for ${member.name}">
      ${safeImage(member.image, member.name)}
      <span class="member-info">
        <span class="member-name">${member.name}</span>
        ${member.nickname ? `<span class="member-nickname">“${member.nickname}”</span>` : `<span class="member-nickname">Community Nursing · Set 3</span>`}
        <span class="member-number">MEMBER ${String(member.id).padStart(2, "0")}</span>
      </span>
      <span class="member-arrow" aria-hidden="true">↗</span>
    </button>`).join("");
  grid.querySelectorAll("[data-member-id]").forEach(button => {
    button.addEventListener("click", () => openProfile(Number(button.dataset.memberId)));
  });
}
function openProfile(id) {
  const member = members.find(item => item.id === id);
  if (!member) return;
  const optional = [
    ["State of Residence", member.state],
    ["Address", member.address],
    ["Personal Motto", member.motto],
    ["Area of Interest", member.interest],
    ["Career Goal", member.careerGoal],
    ["Social Media", member.socialMedia]
  ].filter(([, value]) => value && value.trim());
  const fields = optional.length
    ? optional.map(([label, value]) => `<div class="profile-field"><small>${label}</small><strong>${value}</strong></div>`).join("")
    : `<div class="profile-field"><small>Profile details</small><strong>More details can be added when provided by the member.</strong></div>`;
  modalContent.innerHTML = `
    <div class="modal-head">
      ${safeImage(member.image, member.name, "modal-avatar")}
      <h2 id="modalName">${member.name}</h2>
      <p>${member.nickname ? `Nickname: ${member.nickname} · ` : ""}Community Nursing Set 3</p>
      <p>Member ${String(member.id).padStart(2, "0")} · Entry 2024 · Graduation 2026</p>
    </div>
    <div class="profile-fields">${fields}</div>
    ${member.message ? `<div class="profile-message"><small>MESSAGE TO SET 3</small><p>${member.message}</p></div>` : ""}
    <p class="small-note">Personal details are optional. Add information only with the member’s permission.</p>`;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}
function closeProfile() {
  modal.hidden = true;
  document.body.style.overflow = "";
}
searchInput.addEventListener("input", event => renderMembers(event.target.value));
document.getElementById("modalClose").addEventListener("click", closeProfile);
modal.addEventListener("click", event => { if (event.target === modal) closeProfile(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.hidden) closeProfile();
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault(); searchInput.focus();
  }
});
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();
renderMembers();
