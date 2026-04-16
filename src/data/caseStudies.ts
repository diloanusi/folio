import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "zero-trust-api-integration",
    title: "Zero-Trust API Integration",
    subtitle: "Bridging Legal Systems: Building Secure, Scalable Third-Party Integrations",
    year: 2024,
    role: "Lead Software Engineer",
    duration: "2 years",
    tags: ["User Research", "Usability Testing", "Information Architecture", "API", "Third-Party Integration"],
    coverImage: "/images/cs-onboarding-cover.jpg",
    brief:
      "GM's legal department needed a system that understood the nature of each matter: who could see it, how long it should live, and how it should be cleaned up. " +
        "User stories from the business made three things clear: access to matters had to reflect their sensitivity, retention rules " +
        "had to be enforced automatically, and the process for deleting or modifying matters at scale had to stop depending on manual file uploads.",
    problem:
      "As user stories were refined with the business team, three problems crystallized. First: the system had no concept " +
        "of matter visibility — private matters were accessible to anyone with system access, with no distinction between " +
        "the SI account, primary owner, or additional authorized users. Second: retention status wasn't being enforced — matters " +
        "pending review simply sat, and no automated logic existed to protect, skip, or delete based on their state. " +
        "Third: bulk matter deletion was a fully manual process. Business users had to type matter names into a text file, " +
        "upload it, and trigger a Tidal job — with no resilient handling if a matter had core files, didn't exist, or caused the entire job to fail silently.",
    process: [
      "Implemented role-based access control for matter visibility: private matters restricted to the SI account, " +
      "primary owner, and explicitly authorized additional users; public matters accessible to all users and groups. " +
      "Built retention rule enforcement: matters not flagged for deletion or pending review maintained their status " +
      "unchanged; matters marked for deletion were deleted. Rebuilt the matter deletion pipeline: if a matter existed " +
      "with no core files, it was deleted in full; if core files were present, everything else was deleted and the core " +
      "file was stored in a separate output file; if the matter didn't exist, the job skipped it, notified the user, and " +
      "logged it to a separate info file. Was actively designing the next iteration — replacing the manual text file upload " +
      "with SQL control table calls to automate the entire trigger and deletion flow before leaving the company.",
      "Tested authorization logic across all matter visibility states — private with varying authorized user combinations, " +
      "public with group access — and validated that access was correctly enforced at the API layer. Retention rule tests " +
      "covered all three states: no-action, skip-and-preserve, and delete. Deletion pipeline testing was the most nuanced: required " +
      "coverage of the exists-with-core-files, exists-without-core-files, and does-not-exist branches, verifying not just the action taken" +
      " but that output and info files were written correctly and that single faulty records didn't cascade into job failure.",
    ],
    outcome:
      "Private matter access became enforceable, removing a meaningful compliance risk. Retention logic eliminated a class " +
        "of manual oversight. The deletion pipeline gave business users confidence that bulk operations would be handled " +
        "predictably, with clear feedback on every outcome. Became the recognized SME for iManage — with deep enough understanding " +
        "of the system to proactively propose new features that the business agreed to. Was mid-implementation of the SQL " +
        "control table automation when leaving GM, a project that would have eliminated the last remaining manual step in " +
        "the matter lifecycle. Cited for GM behaviors: Think Customer, Own the Outcome, and Innovate Now.",
    metrics: [
      { label: "Drop-off reduction", value: "40%" },
      { label: "Task completion rate", value: "↑ 28pts" },
      { label: "SUS score improvement", value: "61 → 79" },
    ],
  },
  {
    slug: "api-bridge-platform",
    title: "API Bridge Platform",
    subtitle: "From Fragmented to Unified: API Workflow Transformation",
    year: 2025,
    role: "Senior Product Engineer",
    duration: "4 weeks",
    tags: ["API", "Legal", "Workflow Optimization", "Product Design", "Third-Party Integration"],
    coverImage: "/images/cs-accessibility-cover.jpg",
    brief:
        "GM Legal had no automated way to route documents and approvals across systems. Workflows were handled manually, " +
        "creating bottlenecks and human error at every handoff. The team needed a platform that could orchestrate complex " +
        "legal processes end-to-end, connecting LWF to downstream systems like iManage and Evisort.",
    problem:
        "The initial API implementation had too many restrictions — encoded files were being sent to iManage without proper " +
        "handling, there was no multipart form support for complex document transfers, and the repeated API app pattern " +
        "was becoming messy and hard to maintain. Every new integration required bespoke, fragile work with no shared foundation.",
    process: [
      "Designed and built an ASP.NET Core API bridge — the first fully custom code on the project — using JWT validation, " +
      "claims-based authorization, HTTPS enforcement, input validation, and rate limiting. Implemented multi-stage Docker " +
      "builds with non-root container execution. Deployed to AKS with Helm-managed rolling releases and rollback capability. " +
      "The bridge handled complex API flows and document transfers in a single, reusable service.",
      "Testing covered encoded file handling, multipart form submissions, and edge cases in API connection logic that the " +
      "previous approach had failed on. Validated end-to-end against LWF → iManage and LWF → Evisort document flows. CI/CD " +
      "pipeline ensured every change was tested and containerized before reaching production.",
    ],
    outcome:
      "The API Bridge became reusable infrastructure, handling complex cross-system document workflows that had previously " +
        "required manual intervention. Improved code uniformity across the team and set a new standard for how API integrations " +
        "were approached. Recognized by team lead Jesse for owning the outcome and embracing change. Cited for GM behaviors: Innovate " +
        "Now and Own the Outcome.",
    metrics: [
      { label: "Issues catalogued", value: "147" },
      { label: "Critical issues resolved", value: "32 / 32" },
      { label: "Compliance deadline", value: "6 wks early" },
    ],
  },
  {
    slug: "wayfinding-transit-app",
    title: "Wayfinding Research for Transit App Redesign",
    subtitle: "Contextual inquiry and mental model research in urban transit environments",
    year: 2023,
    role: "Senior UX Researcher",
    duration: "3 months",
    tags: ["Contextual Inquiry", "Mental Models", "Mobile", "Transit"],
    coverImage: "/images/cs-transit-cover.jpg",
    brief:
      "A municipal transit authority commissioned research to understand how riders navigated an unfamiliar system, ahead of a major app redesign. The research needed to capture real-world behavior, not self-reported.",
    problem:
      "Existing app analytics showed heavy use of the search function but very low completion rates for multi-leg journeys. The team suspected the information architecture didn't match how riders mentally constructed trips.",
    process: [
      "Conducted 15 contextual inquiry sessions at 5 subway stations across the city",
      "Recruited participants across 4 experience levels (tourist through daily commuter)",
      "Used think-aloud protocol with concurrent observation",
      "Ran card-sorting exercises to map users' mental models of the transit network",
      "Produced journey maps and mental model diagrams as deliverables",
    ],
    outcome:
      "Research revealed that most riders thought in terms of neighborhoods and landmarks, not line names or stop IDs. The redesigned app adopted a landmark-first search paradigm. Pilot testing showed a 34% improvement in journey completion rate.",
    metrics: [
      { label: "Sessions conducted", value: "15" },
      { label: "Journey completion rate", value: "↑ 34%" },
      { label: "Search-to-route success", value: "↑ 41%" },
    ],
  },
];
