"use client";

import React, { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface RepositoryFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: { language: string; minStars: string }) => void;
}

export function RepositoryFilters({ isOpen, onClose, onApply }: RepositoryFiltersProps) {
  const [language, setLanguage] = useState("");
  const [minStars, setMinStars] = useState("");

  const handleApply = () => {
    onApply({ language, minStars });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-neutral-950 border border-white/[0.05] text-white sm:max-w-md rounded-2xl p-5 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl font-medium tracking-tight">Filter Repositories</DialogTitle>
          <DialogDescription className="text-neutral-400">
            Refine your repository recommendations based on your preferences.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-300">Language</label>
            <select 
              className="w-full bg-neutral-900 border border-white/[0.05] rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="">Any Language</option>
              <option value="TypeScript">TypeScript</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Go">Go</option>
              <option value="Rust">Rust</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-300">Minimum Stars</label>
            <input 
              type="number"
              placeholder="e.g. 100"
              className="w-full bg-neutral-900 border border-white/[0.05] rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              value={minStars}
              onChange={(e) => setMinStars(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter className="mt-2 flex flex-col sm:flex-row sm:justify-between items-stretch gap-3 w-full">
          <Button 
            variant="ghost" 
            onClick={() => { setLanguage(""); setMinStars(""); }}
            className="text-neutral-400 hover:text-white"
          >
            Reset
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose} className="flex-1 sm:flex-none border-white/[0.05] bg-transparent hover:bg-white/[0.02]">
              Cancel
            </Button>
            <Button onClick={handleApply} className="flex-1 sm:flex-none bg-emerald-500 hover:bg-emerald-600 text-black">
              Apply Filters
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}