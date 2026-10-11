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
        {/* Brand & AlgoVisuals Logo */}
        <div className="brand-section">
          <div className="brand-logo-frame">
            <img
              className={`brand-logo-image ${isDark ? 'brand-logo-dark' : 'brand-logo-light'}`}
              src={isDark ? '/assets/DarkIcon.png' : '/assets/LightIcon.png'}
              alt="AlgoVisuals"
              title="AlgoVisuals CS Laboratory & Visualizer Workbench"
            />
          </div>

          <div className="brand-text-container">
            <h1 className="brand-title">
              <span>AlgoVisuals</span>
              <span className="brand-title-detail"> • Algorithm Simulation Workbench</span>
            </h1>
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

          {/* Monochrome theme toggle */}
          <button
            className="btn btn-outline btn-sm theme-toggle-btn"
            onClick={toggleTheme}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <>
                <Sun size={14} color="var(--warning)" />
                <span className="btn-text-hide-mobile">Light Mode</span>
              </>
            ) : (
              <>
                <Moon size={14} color="var(--primary)" />
                <span className="btn-text-hide-mobile">Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
