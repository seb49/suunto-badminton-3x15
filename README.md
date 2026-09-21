
# 🏸 Badminton 3x15 Score — SuuntoPlus App

A SuuntoPlus sports app to track badminton 3x15 scores directly from your Suunto watch during a game. No more losing track of the score — focus on the game.

---

## 📋 Description

**Badminton 3x15 Score** lets you track Home and Away scores in real time during a badminton game. Add points with the physical buttons, and review the final scores in the workout summary.

---

## ⌚ Compatibility

| Watch | Display | Status |
|-------|---------|-------|--------|
| Suunto Vertical 2 | q (466×466) | Not tested|
| Suunto Race S | q (466×466) | Not tested |
| Suunto Race | q (466×466) | ✅ Recommended |
| Suunto Race 2 | q (466×466) | Not tested |
| Suunto Ocean | q (466×466) | Not tested |
| Suunto Vertical (1st gen) | o (280×280) | Not tested |
| Suunto 9 Peak Pro | n (240×240) | Not tested |

---

## 🎮 Controls

### Physical Buttons

| Button | Action |
|--------|--------|
| **UP** short press | +1 point (home) |
| **UP** long press | -1 point (home) |
| **DOWN** short press | +1 point (away) |
| **DOWN** long press | -1 point (away) |

---

## 📱 Display during game

```
          GAME 3
          ───────
  HOME               AWAY
   10        🏸       12
       1st 15 | 10
       2nd 14 | 16
```
## 📱 Display end set

```
    Continue	>
     SET 2
     10-15
CANCEL LAST WIN >
```
## 📱 Display end match

```
    Bad 3x15
     End Match
     1st 15 | 10
     2nd 16 | 14
     3rd  - | -
 CANCEL LAST WIN >
```

---

## 📊 Workout Summary

After ending the workout, the following data is saved to your Suunto app:

| Field | Description |
|-------|-------------|
| **Home wins** | Final score of the home competitor |
| **Away wins** | Final score of the away competitor |

---

## 🗂 File Structure

```
suunto-badminton-3x15/
├── manifest.json   # App configuration and outputs
├── main.js         # Game logic and score management
└── welcome.html    # Start screen
└── t.html          # Main screen
└── endset.html     # End set screen
└── endmatch.html   # End match screen
```

---

## 🛠 Installation

1. Clone or download this repository
2. Open the folder in **VS Code** with the [SuuntoPlus Extension](https://marketplace.visualstudio.com/items?itemName=Suunto.suuntoplus)
3. Click **Build and Deploy** to install on your connected watch
4. Start a **Badminton** workout on your watch
5. Swipe to the SuuntoPlus screen and select **Badminton 3x15 score**

---

## 📝 Notes

- Developed and tested on **Suunto Race**
- The app follows Suunto's official SuuntoPlus development guidelines
- If you encounter any issues on other watch models, please open an issue
- Inspired from https://github.com/GhDero/Basket-ball-score
---

## 📄 License

MIT License — feel free to use, modify and share.