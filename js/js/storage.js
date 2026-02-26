const Storage = {
  getProgress() {
    try {
      const saved = localStorage.getItem('mobilOilProgress');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return { currentIndex: 0, masteredItems: [], streak: 0 };
  },
  
  saveProgress(data) {
    try {
      localStorage.setItem('mobilOilProgress', JSON.stringify(data));
      return true;
    } catch (e) { return false; }
  },
  
  markMastered(id) {
    const progress = this.getProgress();
    if (!progress.masteredItems.includes(id)) {
      progress.masteredItems.push(id);
      return this.saveProgress(progress);
    }
    return false;
  },
  
  unmarkMastered(id) {
    const progress = this.getProgress();
    const index = progress.masteredItems.indexOf(id);
    if (index > -1) {
      progress.masteredItems.splice(index, 1);
      return this.saveProgress(progress);
    }
    return false;
  },
  
  setCurrentIndex(index) {
    const progress = this.getProgress();
    progress.currentIndex = index;
    return this.saveProgress(progress);
  },
  
  updateStreak() {
    const progress = this.getProgress();
    const today = new Date().toDateString();
    const lastVisit = progress.lastVisit ? new Date(progress.lastVisit).toDateString() : null;
    
    if (lastVisit === today) {
    } else if (lastVisit === new Date(Date.now() - 86400000).toDateString()) {
      progress.streak = (progress.streak || 0) + 1;
    } else {
      progress.streak = 1;
    }
    
    progress.lastVisit = new Date().toISOString();
    return this.saveProgress(progress);
  },
  
  reset() {
    try {
      localStorage.removeItem('mobilOilProgress');
      return true;
    } catch (e) { return false; }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Storage;
}
