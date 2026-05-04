export type ChangeKind = "Added" | "Changed" | "Fixed"

export interface ChangelogEntry {
  version: string
  date?: string
  highlight?: string
  groups: { kind: ChangeKind; items: string[] }[]
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: "0.5.9",
    date: "2026",
    highlight: "Linux adaptions and auto-updater fixes.",
    groups: [
      {
        kind: "Added",
        items: ["Window management for linux"],
      },
      {
        kind: "Changed",
        items: ["Secrets (keyring) redesign", "Auto updater stabilization"],
      },
    ],
  },
  {
    version: "0.5.8",
    highlight: "Auto-updater + CI release pipeline.",
    groups: [
      {
        kind: "Added",
        items: [
          "Auto-updater wired into release builds.",
          "GitHub Actions workflow for cross-platform builds and releases.",
        ],
      },
      {
        kind: "Fixed",
        items: ["Linux window initialization on first launch."],
      },
      {
        kind: "Changed",
        items: ["Bumped Node and pnpm in the release pipeline."],
      },
    ],
  },
  {
    version: "0.5.7",
    groups: [
      {
        kind: "Changed",
        items: [
          "New sessions now open in $HOME by default.",
          "Stabilized zsh / bash / pwsh init scripts - fewer first-prompt edge cases.",
        ],
      },
    ],
  },
  {
    version: "0.5.6",
    groups: [
      {
        kind: "Changed",
        items: [
          "Editor and AI modules now lazy-load - smaller install, faster cold start.",
        ],
      },
    ],
  },
  {
    version: "0.5.5",
    groups: [
      { kind: "Added", items: ["Demo assets and updated README screenshots."] },
      { kind: "Changed", items: ["Dependency version sweep."] },
    ],
  },
  {
    version: "0.5.4",
    groups: [
      {
        kind: "Changed",
        items: ["Snippets and commands merged into a single palette."],
      },
    ],
  },
  {
    version: "0.5.3",
    groups: [
      { kind: "Changed", items: ["UI polish across AI and agent views."] },
    ],
  },
  {
    version: "0.5.2",
    groups: [
      { kind: "Changed", items: ["AI mini-window UI/UX improvements."] },
    ],
  },
  {
    version: "0.5.1",
    highlight: "Plans, sub-agents, tasks.",
    groups: [
      {
        kind: "Added",
        items: [
          "Full agentic workflow: plans, sub-agents, tasks, project init.",
          "Improved shell tool for the agent.",
        ],
      },
    ],
  },
  {
    version: "0.4.7",
    highlight: "Vim mode in the editor.",
    groups: [
      {
        kind: "Added",
        items: [
          "Vim mode in the editor (motions, registers, marks).",
          "Keyboard navigation across the file explorer.",
        ],
      },
    ],
  },
  {
    version: "0.4.6",
    groups: [
      { kind: "Changed", items: ["Cleanup pass: dependencies, UI, icons."] },
    ],
  },
  {
    version: "0.4.5",
    groups: [
      {
        kind: "Changed",
        items: [
          "Optimized PTY resize, session lifecycle, and AI context handling.",
        ],
      },
    ],
  },
  {
    version: "0.4.4",
    groups: [{ kind: "Changed", items: ["Agents UI/UX improvements."] }],
  },
  {
    version: "0.4.3",
    highlight: "Skills and multi-agent.",
    groups: [
      {
        kind: "Added",
        items: ["Skills and multi-agent support.", "Settings UI improvements."],
      },
    ],
  },
  {
    version: "0.4.2",
    groups: [
      {
        kind: "Changed",
        items: ["AI autocomplete: improved latency and accuracy."],
      },
    ],
  },
  {
    version: "0.4.1",
    highlight: "Local LLMs + AI autocomplete.",
    groups: [
      {
        kind: "Added",
        items: [
          "Local LLM support via LM Studio.",
          "Groq and Cerebras providers.",
          "AI autocomplete in the editor.",
        ],
      },
    ],
  },
  {
    version: "0.3.9",
    highlight: "AI Edit Diffs.",
    groups: [
      {
        kind: "Added",
        items: [
          "AI Edit Diffs - preview and approve agent edits before applying.",
        ],
      },
    ],
  },
  {
    version: "0.3.8",
    groups: [
      {
        kind: "Added",
        items: [
          "Workspace-wide file search.",
          "Editor tabs decoupled from terminal tabs.",
        ],
      },
    ],
  },
  {
    version: "0.3.7",
    highlight: "Web preview tab.",
    groups: [
      {
        kind: "Added",
        items: ["Web preview tab with auto-detection of local dev servers."],
      },
    ],
  },
  {
    version: "0.3.6",
    groups: [
      { kind: "Added", items: ["Autostart and window-state persistence."] },
      { kind: "Changed", items: ["Settings UI improvements."] },
    ],
  },
  {
    version: "0.3.5",
    groups: [{ kind: "Added", items: ["Standalone settings window."] }],
  },
  {
    version: "0.3.4",
    groups: [
      {
        kind: "Added",
        items: [
          "New AI mini-window.",
          "Text selection handling and session persistence.",
        ],
      },
    ],
  },
  {
    version: "0.3.1",
    groups: [{ kind: "Changed", items: ["Internal refactor."] }],
  },
  {
    version: "0.3.0",
    highlight: "AI agents (initial).",
    groups: [
      {
        kind: "Added",
        items: ["AI agents (initial implementation).", "Apache-2.0 license."],
      },
    ],
  },
  {
    version: "0.2.9",
    highlight: "Keys move to the OS keychain.",
    groups: [
      {
        kind: "Added",
        items: ["Tauri keyring - API keys now stored in the OS keychain."],
      },
      { kind: "Changed", items: ["Internal renaming pass."] },
    ],
  },
  {
    version: "0.2.8",
    groups: [{ kind: "Changed", items: ["Icon set and theme refresh."] }],
  },
  {
    version: "0.2.7",
    groups: [
      { kind: "Added", items: ["File explorer context menu."] },
      { kind: "Changed", items: ["General refactor; editor improvements."] },
    ],
  },
  {
    version: "0.2.4",
    groups: [{ kind: "Fixed", items: ["Various bug fixes."] }],
  },
  {
    version: "0.2.3",
    highlight: "File explorer + editor.",
    groups: [
      {
        kind: "Added",
        items: [
          "File explorer (first version).",
          "Code editor based on CodeMirror 6.",
        ],
      },
    ],
  },
  {
    version: "0.2.1",
    groups: [
      { kind: "Added", items: ["Logging."] },
      {
        kind: "Fixed",
        items: ["Shell script handling and session edge cases."],
      },
    ],
  },
  {
    version: "0.2.0",
    groups: [
      {
        kind: "Added",
        items: ["AI side panel.", "Status bar.", "Keyboard shortcuts."],
      },
    ],
  },
  {
    version: "0.1.3",
    groups: [{ kind: "Added", items: ["AI SDK and AI Elements integration."] }],
  },
  {
    version: "0.1.2",
    groups: [
      { kind: "Added", items: ["New app logo.", "Configurable window size."] },
    ],
  },
  {
    version: "0.1.1",
    groups: [
      {
        kind: "Changed",
        items: [
          "Rendering and resize improvements.",
          "Header and tabs UI polish.",
        ],
      },
    ],
  },
  {
    version: "0.1.0",
    groups: [
      {
        kind: "Changed",
        items: [
          "New UI shell.",
          "Internal refactor; fixed render/resize race.",
        ],
      },
    ],
  },
  {
    version: "0.0.8",
    groups: [
      { kind: "Added", items: ["Multi-tab support.", "Basic layout UI."] },
    ],
  },
  {
    version: "0.0.7",
    groups: [
      {
        kind: "Changed",
        items: ["Switched icon library from Lucide to HugeIcons."],
      },
    ],
  },
  {
    version: "0.0.6",
    groups: [
      {
        kind: "Added",
        items: ["Custom font and theme.", "Tauri window management."],
      },
    ],
  },
  {
    version: "0.0.5",
    groups: [
      {
        kind: "Added",
        items: ["xterm.js WebGL renderer, search, and link plugins."],
      },
    ],
  },
  {
    version: "0.0.4",
    groups: [
      {
        kind: "Added",
        items: ["shadcn/ui component set and supporting deps."],
      },
    ],
  },
  {
    version: "0.0.3",
    groups: [
      {
        kind: "Added",
        items: ["Child process lifecycle handling.", "Per-session locking."],
      },
    ],
  },
  {
    version: "0.0.2",
    highlight: "First prototype.",
    groups: [
      {
        kind: "Added",
        items: ["Initial Rust PTY backend with xterm.js in React."],
      },
    ],
  },
]
