import React from 'react';
import { 
  Sun, 
  Moon, 
  BarChart2, 
  BookOpen, 
  Sparkles
} from 'lucide-react';

export default function Header({
  theme,
  setTheme,
  onOpenComparison,
  onOpenTheory
}) {
  const isDark = theme === 'obsidian-gold' || theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'woody-gold' : 'obsidian-gold');
  };

  return (
    <header className="header-bar">
      <div className="header-inner">
        {/* Brand & AlgoLab Logo */}
        <div className="brand-section">
          <div className="brand-logo-frame">
            <img
              className={`brand-logo-image ${isDark ? 'brand-logo-dark' : 'brand-logo-light'}`}
              src={isDark ? '/assets/algodark.svg' : '/assets/algolight.svg'}
              alt="AlgoLab"
              title="AlgoLab CS Laboratory & Visualizer Workbench"
            />
          </div>

          <div className="brand-text-container">
            <h1 className="brand-title">AlgoLab • Algorithm Simulation Workbench</h1>
            <p className="brand-subtitle">
              OS Core • Graph & MST • Dynamic Programming • Sorting • Array & String • Backtracking
            </p>
          </div>
        </div>

        {/* Action Controls & Two-Theme Switcher */}
        <div className="header-actions">
          <button 
            className="btn btn-secondary btn-sm"
            onClick={onOpenTheory}
            title="Algorithm Theory, Principles & Pseudocode"
          >
            <BookOpen size={13} /> <span className="btn-text-hide-mobile">Theory Guide</span>
          </button>

          <button 
            className="btn btn-primary btn-sm"
            onClick={onOpenComparison}
            title="Compare category algorithms side-by-side (C)"
          >
            <BarChart2 size={13} /> <span className="btn-text-hide-mobile">Compare All</span>
          </button>

          {/* Classy Gold/Obsidian Theme Toggle */}
          <button
            className="btn btn-outline btn-sm theme-toggle-btn"
            onClick={toggleTheme}
            title={isDark ? 'Switch to Champagne Gold & Wood (Light)' : 'Switch to Obsidian Gold Glass (Dark)'}
          >
            {isDark ? (
              <>
                <Sun size={14} color="var(--warning)" />
                <span className="btn-text-hide-mobile">Wood & Gold</span>
              </>
            ) : (
              <>
                <Moon size={14} color="var(--primary)" />
                <span className="btn-text-hide-mobile">Obsidian Dark</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
