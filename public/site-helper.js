const CARD_DATA = [
  {
    title: "快速导航",
    content: "使用顶部菜单或搜索功能快速找到您需要的内容。",
    tag: "提示",
    color: "#e8f5e9"
  },
  {
    title: "华体会活动",
    content: "当前首页最新活动已上线，点击对应横幅即可查看详情。",
    tag: "热点",
    color: "#fff3e0"
  },
  {
    title: "账户安全",
    content: "请勿向他人透露您的密码，并定期更新登录凭据。",
    tag: "安全",
    color: "#fce4ec"
  },
  {
    title: "技术支持",
    content: "如遇问题，请访问 https://site-home-hth.com.cn 获取帮助。",
    tag: "帮助",
    color: "#e3f2fd"
  }
];

const KEYWORD_BADGES = [
  "华体会",
  "首页",
  "新用户",
  "热门推荐",
  "华体会活动",
  "安全中心"
];

function createCardElement(card) {
  const div = document.createElement("div");
  div.className = "site-card";
  div.style.backgroundColor = card.color || "#ffffff";
  div.style.border = "1px solid #ccc";
  div.style.borderRadius = "8px";
  div.style.padding = "16px";
  div.style.margin = "12px 0";
  div.style.boxShadow = "0 2px 4px rgba(0,0,0,0.08)";

  const titleEl = document.createElement("h3");
  titleEl.textContent = card.title;
  titleEl.style.margin = "0 0 8px 0";
  titleEl.style.fontSize = "1.2em";
  titleEl.style.color = "#333";

  const contentEl = document.createElement("p");
  contentEl.textContent = card.content;
  contentEl.style.margin = "0 0 8px 0";
  contentEl.style.color = "#555";
  contentEl.style.lineHeight = "1.5";

  const tagEl = document.createElement("span");
  tagEl.textContent = card.tag;
  tagEl.style.display = "inline-block";
  tagEl.style.backgroundColor = "#eee";
  tagEl.style.padding = "4px 10px";
  tagEl.style.borderRadius = "12px";
  tagEl.style.fontSize = "0.8em";
  tagEl.style.color = "#666";

  div.appendChild(titleEl);
  div.appendChild(contentEl);
  div.appendChild(tagEl);

  return div;
}

function createBadge(text) {
  const span = document.createElement("span");
  span.textContent = text;
  span.style.display = "inline-block";
  span.style.backgroundColor = "#f0f0f0";
  span.style.border = "1px solid #d0d0d0";
  span.style.borderRadius = "14px";
  span.style.padding = "6px 14px";
  span.style.margin = "6px 6px 0 0";
  span.style.fontSize = "0.9em";
  span.style.color = "#444";
  span.style.cursor = "default";
  return span;
}

function renderCards(containerId, cards) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn("Container with id '" + containerId + "' not found.");
    return;
  }
  cards.forEach(function (card) {
    const cardEl = createCardElement(card);
    container.appendChild(cardEl);
  });
}

function renderBadges(containerId, badges) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn("Container with id '" + containerId + "' not found.");
    return;
  }
  badges.forEach(function (badge) {
    const badgeEl = createBadge(badge);
    container.appendChild(badgeEl);
  });
}

function renderAccessNotice(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }
  const notice = document.createElement("div");
  notice.style.backgroundColor = "#fafafa";
  notice.style.border = "1px solid #e0e0e0";
  notice.style.borderRadius = "6px";
  notice.style.padding = "12px";
  notice.style.margin = "16px 0";
  notice.style.fontSize = "0.95em";
  notice.style.color = "#444";

  const p1 = document.createElement("p");
  p1.textContent = "欢迎访问华体会站点。本页面为辅助导航卡片与关键词概览。";
  p1.style.margin = "0 0 6px 0";

  const p2 = document.createElement("p");
  p2.textContent = "官方主页: https://site-home-hth.com.cn";
  p2.style.margin = "0";
  p2.style.wordBreak = "break-all";

  notice.appendChild(p1);
  notice.appendChild(p2);
  container.appendChild(notice);
}

document.addEventListener("DOMContentLoaded", function () {
  renderCards("card-container", CARD_DATA);
  renderBadges("badge-container", KEYWORD_BADGES);
  renderAccessNotice("notice-container");
});