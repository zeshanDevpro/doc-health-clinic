"use client";

import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

type SelectOption = {
  value: string;
  label: string;
};

type SelectInputDropdownProps = {
  options: SelectOption[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
  "aria-label"?: string;
};

export function SelectInputDropdown({
  options,
  selectedValue,
  onValueChange,
  placeholder = "Select an option",
  className = "",
  disabled = false,
  id,
  "aria-label": ariaLabel,
}: SelectInputDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === selectedValue);

  const normalize = (s: string) =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .trim();

  const filteredOptions = (() => {
    const term = normalize(searchTerm);
    if (!term) {
      return options.filter((option) => option.label && option.value);
    }

    const scored: Array<{ option: SelectOption; score: number }> = [];

    for (const option of options) {
      if (!option.label || !option.value) continue;

      const label = normalize(option.label);
      const value = normalize(option.value);

      let score = Number.POSITIVE_INFINITY;
      if (label.startsWith(term) || value.startsWith(term)) {
        score = 0;
      } else if (label.includes(term) || value.includes(term)) {
        score = 1;
      }

      if (score !== Number.POSITIVE_INFINITY) {
        scored.push({ option, score });
      }
    }

    scored.sort((a, b) => {
      if (a.score !== b.score) return a.score - b.score;
      return a.option.label.localeCompare(b.option.label);
    });

    return scored.map((s) => s.option);
  })();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
        setHighlightedIndex(0);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setSearchTerm("");
      setHighlightedIndex(0);
    } else {
      const focusTimeout = window.setTimeout(() => {
        dropdownContainerRef.current?.focus();
      }, 10);

      return () => window.clearTimeout(focusTimeout);
    }
  }, [isOpen]);

  useEffect(() => {
    setHighlightedIndex(0);
  }, [searchTerm]);

  useEffect(() => {
    if (listRef.current && highlightedIndex >= 0) {
      const highlightedElement = listRef.current.children[
        highlightedIndex
      ] as HTMLElement;
      highlightedElement?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [highlightedIndex]);

  const handleSelect = (value: string) => {
    onValueChange(value);
    setIsOpen(false);
    setSearchTerm("");
    setHighlightedIndex(0);
  };

  const handleSearchTyping = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : 0,
        );
        return;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredOptions.length - 1,
        );
        return;
      case "Enter":
        e.preventDefault();
        if (filteredOptions[highlightedIndex]) {
          handleSelect(filteredOptions[highlightedIndex].value);
        }
        return;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        setSearchTerm("");
        setHighlightedIndex(0);
        return;
      case "Backspace":
        e.preventDefault();
        setSearchTerm((prev) => prev.slice(0, -1));
        return;
    }

    if (e.key.length === 1) {
      e.preventDefault();
      setSearchTerm((prev) => prev + e.key.toLowerCase());
    }
  };

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen((open) => !open);
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        type="button"
        id={id}
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        disabled={disabled}
        onClick={handleToggle}
        className={`flex h-14 w-full cursor-pointer items-center justify-between rounded-2xl border border-gray-200 bg-brand-surface px-4 py-2 text-left transition-colors ${
          disabled
            ? "cursor-not-allowed opacity-50"
            : "hover:border-brand-green/40 hover:bg-white"
        } ${isOpen ? "border-brand-green ring-2 ring-brand-green/20" : ""}`}
      >
        <span
          className={`text-sm font-medium leading-normal ${
            selectedOption ? "text-brand-navy" : "text-brand-grey"
          }`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <FaChevronDown
          className={`h-4 w-4 shrink-0 text-brand-grey transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>

      {isOpen && (
        <div
          ref={dropdownContainerRef}
          role="listbox"
          className="absolute top-full left-0 right-0 z-50 mt-1 overflow-hidden rounded-2xl border border-gray-200 bg-white p-1 shadow-lg focus:outline-none"
          onKeyDown={handleSearchTyping}
          tabIndex={0}
        >
          <div
            ref={listRef}
            className="scrollbar-hidden max-h-60 overflow-y-auto py-1"
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <button
                  key={`${option.value}-${index}`}
                  type="button"
                  role="option"
                  aria-selected={selectedValue === option.value}
                  className={`w-full cursor-pointer px-4 py-2 text-left text-sm transition-colors ${
                    selectedValue === option.value
                      ? "rounded-[10px] bg-brand-green/10 text-brand-navy"
                      : "rounded-[10px] text-brand-grey hover:bg-brand-surface"
                  } ${index === highlightedIndex ? "bg-brand-surface" : ""}`}
                  onClick={() => handleSelect(option.value)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {option.label}
                </button>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-sm text-brand-grey">
                No results available
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
