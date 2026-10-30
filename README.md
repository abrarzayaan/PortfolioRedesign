# Md. Shah Abrar Zahin

### I don't just write backend code. I architect the systems that help a business grow.

> **Backend Architect · Data-Driven Systems · Distributed Systems (in depth)**
> Dhaka, Bangladesh · 3+ years in production · Oracle · PostgreSQL · Python/Django · Redis · Celery

📧 abrar.bauet@gmail.com · 📞 01334317864
🔗 [GitHub](https://github.com/abrarzayaan) · [LinkedIn](https://www.linkedin.com/in/mdshahabrarzayaan/)

---

## 1. If you only read 30 seconds

Most developers start with the question *"Which framework should we use?"*
I start with a different one: **"Where is this business losing time, money, or trust, and which part of the system causes it?"**

Slow reports, a database that dies on busy days, stock that goes negative, numbers that don't match between two dashboards, a system that works for 10 vendors but breaks at 100. These are not "bugs". They are **architecture problems wearing a bug costume**, and they are what I fix.

I work end to end:

```
Business problem → Data model → System architecture → API & logic → Performance → Reliability → Reporting → Growth
```

I own every link in that chain, so there is no gap between "what the business needs" and "what the system does".

---

## 2. Why "backend developer" is the wrong label for me

| A backend developer usually asks | I ask |
|---|---|
| "What endpoints do you need?" | "What decision should this system help you make faster?" |
| "Which database?" | "What happens to your data model when you have 10× the vendors, orders, or clients?" |
| "It works on my machine." | "What happens at 2 a.m. on your busiest day when one component fails?" |
| "The report is ready." | "Is the number in the report *correct*, and will it still be correct next year?" |
| "Ticket closed." | "Did the business metric actually move?" |

My background is unusual and it is my advantage: **I spent three years living inside the data of real enterprise clients**, where a wrong number has a cost. That taught me what most backend engineers learn late: *a system is only as valuable as the correctness, speed, and trustworthiness of the data it produces.*

---

## 3. The problems I solve (and how to recognise you need me)

| If this sounds like your business… | What I do | Outcome you should expect |
|---|---|---|
| **"Our reports and dashboards are painfully slow."** | Audit execution plans, rework queries, indexing and data access patterns | Faster reports. I cut query latency by **45%** (under **500 ms**) across **300+ queries / 5+ client systems** |
| **"Our numbers don't match between teams."** | Standardise schemas, automate extraction and normalisation, add automated SQL validation | **100% schema consistency**, **99.8%** query/report accuracy |
| **"We're growing and the system is starting to crack."** | Redesign the data model and the flow of data; add caching, async processing, safe concurrency | A system that scales *before* it becomes an emergency |
| **"We run a marketplace / multi-vendor / delivery business."** | Design multi-tenant, multi-vendor schemas, central and vendor stock sync, order, rider and payout logic | No overselling, no race conditions, clean ledgers (see PharmaSys below) |
| **"Everything runs on manual Excel and copy-paste."** | Automate data pipelines and recurring reports | **20+ workflows automated**, **35% faster** report delivery |
| **"We can't tell what's really happening in the business."** | Build analytics layers and BI dashboards (Power BI, Tableau, DAX) on top of trustworthy data | Decisions based on data you can defend |
| **"Different people see data they shouldn't."** | Role-based access control, privilege policies across environments | **100% compliance** with security standards |
| **"We need to be ready for scale and failure."** | Move toward distributed, event-driven design: queues, workers, resilient data flows | A business that doesn't stop when one part breaks |

---

## 4. Proof, not promises

### 🏭 Enterprise Reporting & Data Systems (AKT Tobacco & AKT Leaf)
**Role:** System Engineer (Data Engineer), Suffix IT LTD. · Jun 2023 – Aug 2026

- Kept production reporting alive for enterprise clients at **99.9% uptime** across **1M+ daily records** on Oracle & PostgreSQL.
- Refactored **300+ SQL queries** across **5+ client systems** and cut latency **45%** (runtime under **500 ms**).
- Automated **20+ extraction/normalisation workflows**: **100% schema consistency**, **35% faster** report delivery.
- Delivered analytics reports with **98%+ data accuracy**, supporting a **20% YoY increase in sales volume**.
- Built automated SQL validation scripts, raising accuracy to **99.8%** across all deliverables.
- Configured role-based privileges across multi-environment databases with **100% security compliance**.

**What this means for a client:** I've already operated in the environment where mistakes are expensive. I bring that discipline to your system from day one.

### 💊 PharmaSys: Multi-Vendor E-Commerce Platform with Rider Management
**Stack:** Python · Django REST Framework · PostgreSQL · Redis · Celery · JWT · RBAC

- **System & DB architecture:** relational schema covering multi-vendor inventories, central stock, order processing and real-time delivery tracking.
- **Inventory without overselling:** vendor stock synced with central warehouse using **database transactions and row-level locking**, which prevents race conditions.
- **Rider logistics portal:** order assignment, live status updates, payout calculation.
- **Performance:** **Redis caching** for hot product catalogs; `select_related` / `prefetch_related` to kill N+1 queries.
- **Security:** JWT auth with dynamic **RBAC** for Vendors, Customers, Riders and Admins.
- **Async processing:** **Celery + Redis** for email notifications, daily stock reconciliation and invoice generation.

**What this means for a client:** I can design the *whole* operational brain of a marketplace, not just its API.

### 📊 Analytics Systems (Power BI · Excel · DAX · Python)
- **E-Commerce OneShop Sales Analysis:** scraping and multi-source ingestion that consolidated **1M+ unstructured transaction records** into clean datasets, with ETL, forecasting and revenue dashboards. ([GitHub](https://github.com/abrarzayaan/E-Commerce_OneShop_Sales_Analysis))
- **Yearly Enterprise Sales Analysis:** multi-year fragmented sales data unified with **100% data integrity**; custom DAX for YoY growth and seasonality. ([GitHub](https://github.com/abrarzayaan/ShopYearly_sales_alalysis))
- **Customer Bike Purchase Demographics:** interactive Excel dashboard that segments target customers by income, commute and age. ([GitHub](https://github.com/abrarzayaan/customers_bike_purchase_analysis_dashboard))

---

## 5. How I think: five principles

1. **Business first, technology second.** Every technical decision must be traceable to a business outcome.
2. **Correctness before speed, speed before cleverness.** A fast wrong answer is worse than a slow right one, and a clever system nobody can maintain is worse than both.
3. **Design for failure.** Assume a component will break. Decide *now* what happens next.
4. **Measure everything.** If I can't show a before/after number, I haven't finished the job.
5. **Simple until proven otherwise.** I add distribution and complexity only when the problem demands it, never to look impressive.

---

## 6. How an engagement works

| Phase | What happens | What you get |
|---|---|---|
| **1. Discover** | I learn your business flow, pain points and the metrics you care about. | A clear problem statement in business language |
| **2. Diagnose** | Audit of schema, queries, data flow and failure points. | Prioritised findings: what hurts most, what's cheapest to fix |
| **3. Architect** | Data model and system design aligned to your growth plan. | Architecture diagram + trade-off notes |
| **4. Build** | APIs, business logic, pipelines, automation. | Working, tested, documented system |
| **5. Harden** | Concurrency safety, caching, async processing, access control, validation. | A system that survives real-world load |
| **6. Prove** | Before/after metrics, dashboards and reports. | Evidence the business actually improved |

---

## 7. Toolkit by layer

| Layer | Production-proven | Skills / Working knowledge |
|---|---|---|
| **Data & Databases** | Oracle, PostgreSQL, advanced SQL, indexing, execution plans, ETL | MySQL, SQL Server, Supabase |
| **Backend** | Python, Django, Django REST Framework, JWT, RBAC | FastAPI, Flask |
| **Performance & Caching** | Redis, ORM optimisation, query tuning | |
| **Async & Workflows** | Celery + Redis background processing | Apache Airflow |
| **Concurrency & Integrity** | DB transactions, row-level locking | |
| **Analytics & BI** | Power BI, DAX, Excel/Power Query, Pandas | Tableau |
| **DevOps & Tooling** | Git, GitHub, GitLab, Linux, Postman | Docker, Kubernetes, CI/CD |
| **Languages** | Python, SQL | C, C++ |

---

## 8. Where I'm heading: distributed systems

My direction is deliberate: **distributed systems and event-driven architecture.**

Why it matters for a business, not for a CV:

- **Resilience:** one failure should not stop sales.
- **Scale on demand:** handle the festival-day spike without over-paying for infrastructure the other 360 days.
- **Independent growth:** teams and services evolve without breaking each other.
- **Trustworthy data across services:** consistency strategies that keep money and stock numbers correct.

What I already apply in production: queues and workers (Celery + Redis), caching layers, transactional safety under concurrency, and multi-environment data governance. What I'm actively deepening: message brokers and event streaming, service decomposition, replication and partitioning, consistency models, observability.

> I'll tell you honestly when your business does **not** need distribution yet. The best architecture is the simplest one that survives your next stage of growth.

---

## 9. Who I'm the right fit for

**Great fit**
- Startups and scale-ups whose database or reporting is becoming the bottleneck
- Marketplaces, logistics, retail, pharma, manufacturing and distribution businesses
- Teams that want one person who understands *both* the business and the data layer
- Companies that need accuracy, auditability and security, not just "it works"

**Probably not a fit**
- Pure front-end or design-only projects
- "Build it as cheap and fast as possible, quality doesn't matter" projects

---

## 10. Questions I'll ask in our first call

1. What does your business do when it's running *perfectly*, and what is the first thing that breaks when it grows 5×?
2. Which report or number do you trust least?
3. Where do people still copy-paste, re-key or reconcile by hand?
4. What happens today if your database or main service goes down for an hour?
5. What single metric would make you say "this was worth it"?

---

## 11. Education

**B.Sc. in Computer Science & Engineering**, Bangladesh Army University of Engineering and Technology (2018 – 2022)
Thesis: *Object Detection: Comparative Study of YOLOv3 vs YOLOv7*

---

## 12. Let's talk

If your system is slowing your business down, or you can see the next stage of growth and don't trust your current system to carry it, let's talk.

📧 **abrar.bauet@gmail.com** · 📞 **01334317864** · [LinkedIn](https://www.linkedin.com/in/mdshahabrarzayaan/) · [GitHub](https://github.com/abrarzayaan)

---

<details>
<summary><b>Appendix (for the portfolio builder): positioning, keywords, tone</b></summary>

**One-line positioning:** *"End-to-end business backend architect: I turn business problems into scalable, reliable, data-driven systems."*

**Alt taglines**
- "Systems that grow with your business."
- "From business problem to production architecture."
- "I build the backend your growth depends on."

**Search intents this portfolio should answer**
slow database / slow reports fix · SQL query optimisation · PostgreSQL / Oracle expert · multi-vendor marketplace backend · inventory race condition / overselling · Django REST API architecture · data pipeline automation · Power BI dashboards · backend architect Bangladesh · distributed systems consultant · event-driven architecture

**Tone of voice:** confident, analytical, plain-spoken. Short sentences. Always lead with the business problem, then the solution, then the number. No buzzword soup. Never say "passionate", "ninja", "rockstar".

**Honesty rule:** only use metrics that appear in this file or the two resumes. Mark anything illustrative as "illustrative".

**Items to confirm before publishing:** current availability (employment ended Aug 2026 per resume), preferred contact method, whether client names (AKT Tobacco / AKT Leaf) may be shown publicly, any new projects since the resumes.
</details>
