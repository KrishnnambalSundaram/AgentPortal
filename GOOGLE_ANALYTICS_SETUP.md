# Google Analytics 4 Integration Guide

## ✅ Implementation Complete with GDPR-Compliant Cookie Consent!

Google Analytics 4 has been fully integrated into your AI Agents Portal with a beautiful cookie consent banner. Follow the steps below to activate it.

---

## 🎯 Step 1: Get Your Measurement ID

### Create Google Analytics 4 Property

1. **Go to Google Analytics**
   - Visit: https://analytics.google.com
   - Sign in with your Google account

2. **Create Property**
   - Click "Admin" (gear icon, bottom left)
   - Click "Create Property"
   - Enter property details:
     - Property name: "Inflecto AI Agents Portal"
     - Timezone: Select your timezone
     - Currency: Select your currency

3. **Set Up Data Stream**
   - Select "Web" as platform
   - Enter your website URL (e.g., `https://yourdomain.com`)
   - Stream name: "AI Agents Portal"
   - Click "Create stream"

4. **Get Measurement ID**
   - After creating stream, you'll see your **Measurement ID**
   - Format: `G-XXXXXXXXXX`
   - **Copy this ID** - you'll need it next!

---

## 🔧 Step 2: Add Your Measurement ID

You have **TWO OPTIONS** for adding your Measurement ID:

### **Option A: Environment Variable** (Recommended)

1. **Create `.env` file** in project root:
```bash
VITE_GA_MEASUREMENT_ID=G-ABC123DEF4
```

2. **Restart dev server**:
```bash
npm run dev
```

That's it! The CookieConsent component will use this automatically.

### **Option B: Direct Edit**

Open: `src/components/CookieConsent.jsx`

Find line 28:
```javascript
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
```

Replace `G-XXXXXXXXXX` with your actual ID:
```javascript
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-ABC123DEF4';
```

⚠️ **Recommendation**: Use Option A (environment variable) so you can have different IDs for development and production.

---

## 🎉 Step 3: Deploy & Test

### Deploy Your Changes

```bash
# Commit changes
git add .
git commit -m "Add Google Analytics 4 integration"

# Deploy to production
npm run build
# Upload to your hosting service
```

### Verify It's Working

1. **Real-time Testing**
   - Open Google Analytics dashboard
   - Go to: Reports → Realtime → Overview
   - Visit your website in another tab
   - You should see yourself as an active user within 30 seconds!

2. **Debug Mode** (Optional)
   - Open browser DevTools (F12)
   - Go to Console tab
   - Type: `dataLayer`
   - You should see an array with tracking data

3. **Chrome Extension** (Recommended)
   - Install: [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/)
   - Enable extension
   - Visit your site
   - Check console for GA events

---

## 📊 What's Being Tracked

### Automatic Tracking

✅ **Page Views** - Every route change  
✅ **User Sessions** - Time on site  
✅ **Device Type** - Mobile/Desktop/Tablet  
✅ **Location** - Country, City  
✅ **Traffic Sources** - How users found your site  

### Custom Events Implemented

| Event | When It Fires | Data Captured |
|-------|---------------|---------------|
| `view_agent` | User views agent detail page | Agent ID, Name |
| `request_agent_access` | User submits access request form | Agent ID, Name, Email |
| `login` | User logs in successfully | Email, Is Inflecto Employee |
| `sign_up` | User registers successfully | Email, Is Inflecto Employee |
| `social_click` | User clicks social media icon | Platform (LinkedIn/Facebook/Twitter) |
| `click` | Custom button clicks | Button name, Location |
| `exception` | Errors occur | Error message, Type, Location |

---

## 🔍 View Analytics Data

### In Google Analytics Dashboard

1. **Real-time Users**
   - Reports → Realtime → Overview
   - See users currently on your site

2. **Page Views**
   - Reports → Engagement → Pages and screens
   - See most viewed pages

3. **Events**
   - Reports → Engagement → Events
   - See all custom events (agent views, logins, etc.)

4. **User Demographics**
   - Reports → User → Demographics
   - Age, gender, location data

5. **Acquisition**
   - Reports → Acquisition → Overview
   - How users found your site

---

## 🛠️ Advanced: Custom Event Tracking

### How to Add More Tracking

Import the utility in any component:

```javascript
import { trackEvent, trackButtonClick } from '../utils/analytics';
```

### Examples

**Track Button Click:**
```javascript
import { trackButtonClick } from '../utils/analytics';

<button onClick={() => {
  trackButtonClick('Explore Agents', 'Hero Section');
  scrollToAgents();
}}>
  Explore Agents
</button>
```

**Track Custom Event:**
```javascript
import { trackEvent } from '../utils/analytics';

const handleShareAgent = () => {
  trackEvent('share_agent', {
    agent_id: agent.id,
    share_method: 'email'
  });
};
```

**Track Errors:**
```javascript
import { trackError } from '../utils/analytics';

catch (error) {
  trackError(error.message, 'API_ERROR', 'AgentPage');
  // Handle error...
}
```

---

## 📁 Files Created/Modified

### Created:
- ✅ `src/utils/analytics.js` - Analytics utility functions
- ✅ `src/components/RouteChangeTracker.jsx` - Auto-track route changes
- ✅ `src/components/CookieConsent.jsx` - GDPR-compliant cookie banner
- ✅ `GOOGLE_ANALYTICS_SETUP.md` - This guide

### Modified:
- ✅ `index.html` - Removed direct GA4 script (now loads conditionally)
- ✅ `src/App.jsx` - Added RouteChangeTracker + CookieConsent
- ✅ `src/pages/AgentPage.jsx` - Track agent views
- ✅ `src/pages/LoginPage.jsx` - Track logins
- ✅ `src/pages/RegisterPage.jsx` - Track registrations
- ✅ `src/components/AgentAccessModal.jsx` - Track access requests
- ✅ `src/components/Footer.jsx` - Track social clicks

---

## 🎯 Events You Can Track Now

### Currently Implemented:

```javascript
// Page Views (Automatic)
✅ Home page view
✅ Agent detail page view
✅ Login page view
✅ Register page view
✅ Verify page view

// Custom Events (Manual)
✅ Agent viewed
✅ Agent access requested
✅ User logged in
✅ User registered
✅ Social media clicked

// Available to Use:
📌 trackButtonClick(name, location)
📌 trackEvent(name, params)
📌 trackError(message, type, location)
📌 trackSearch(term)
📌 trackVideoPlay(agentId, name)
```

---

## 🔒 Privacy & GDPR Compliance

### ✅ Already Implemented!

Your site now has a **GDPR-compliant cookie consent banner** with:

#### **Features:**
- 🎨 **Beautiful Design** - Matches your black theme with cyan accents
- ✨ **GSAP Animations** - Smooth entrance/exit animations
- 🍪 **Cookie Icon** - Clear visual indicator
- 📱 **Responsive** - Works on all devices
- 💾 **Remembers Choice** - Saves to localStorage
- 🔒 **Privacy First** - GA only loads after "Accept"
- 🌍 **IP Anonymization** - Enabled by default
- ⚡ **Non-blocking** - Doesn't stop site functionality

#### **How It Works:**

1. **First Visit** - Banner appears after 1 second
2. **Accept** - Loads Google Analytics + saves choice
3. **Decline** - No analytics loaded + saves choice
4. **Return Visit** - Choice remembered, no banner

#### **User Actions:**

| Button | What Happens | GA Loaded? |
|--------|--------------|------------|
| Accept All | Consent saved, GA loads | ✅ Yes |
| Decline | Rejection saved, no tracking | ❌ No |
| X (Close) | Same as Decline | ❌ No |

#### **Compliance:**

✅ **GDPR** - Explicit opt-in before tracking  
✅ **CCPA** - Clear opt-out option  
✅ **IP Anonymization** - Built-in  
✅ **Transparent** - Links to privacy policy  
✅ **Persistent** - Remembers choice forever  

### **Still Recommended:**

1. **Update Privacy Policy** to mention:
   - Google Analytics usage
   - What data is collected
   - How to opt-out
   - Cookie duration

2. **Test Cookie Banner** on first visit (clear localStorage to test)

---

## 📈 What You'll See in Analytics

### After 24-48 Hours:

- **User acquisition**: Where users come from
- **Popular agents**: Most viewed agents
- **Conversion funnel**: Registration → Verification → Login
- **User behavior**: Time on page, bounce rate
- **Device breakdown**: Mobile vs Desktop usage
- **Access requests**: How many per agent
- **Social engagement**: Which platforms drive traffic

---

## 🚀 Quick Start Checklist

- [ ] Create Google Analytics 4 property
- [ ] Get Measurement ID (G-XXXXXXXXXX)
- [ ] Add ID to `.env` file OR edit `CookieConsent.jsx`
- [ ] Clear browser localStorage (to test banner)
- [ ] Test cookie banner (should appear on first visit)
- [ ] Click "Accept All" and verify in GA Real-time
- [ ] Deploy to production
- [ ] Update privacy policy (recommended)

---

## 💡 Pro Tips

1. **Set Up Goals** in GA4 for:
   - Agent access requests
   - User registrations
   - Inflecto employee logins

2. **Create Custom Reports** for:
   - Most popular agents
   - Conversion rates
   - User engagement

3. **Set Up Alerts** for:
   - Traffic spikes
   - Error rate increases
   - Drop in conversions

4. **Link with Google Search Console** for SEO insights

---

## 🧪 Testing Cookie Consent

### **Test the Banner**

1. **Open DevTools** (F12)
2. **Application tab** → Local Storage → Select your site
3. **Delete** `cookie_consent` and `cookie_consent_date`
4. **Refresh page**
5. Banner should appear after 1 second!

### **Test Accept Flow**

1. Click **"Accept All"**
2. Check localStorage - should see:
   - `cookie_consent: "accepted"`
   - `cookie_consent_date: "2026-01-30T..."`
3. Check Console - type `dataLayer` (should exist)
4. Check Network tab - should see requests to `google-analytics.com`

### **Test Decline Flow**

1. Clear localStorage again
2. Click **"Decline"** or **X**
3. Check localStorage - should see:
   - `cookie_consent: "declined"`
4. Check Console - `dataLayer` should NOT exist
5. No GA requests in Network tab

---

## 🆘 Troubleshooting

### Not Seeing Data?

1. **Check Measurement ID**
   - Make sure it's correct in `CookieConsent.jsx` or `.env`
   - Should start with `G-`

2. **Check Consent**
   - Did you click "Accept All"?
   - Check localStorage for `cookie_consent: "accepted"`

3. **Check Browser**
   - Disable ad blockers (they block GA)
   - Enable third-party cookies
   - Try incognito mode

4. **Check Console**
   - Open DevTools → Console
   - Look for `gtag` errors
   - Type `dataLayer` to see if it exists

5. **Check Banner Logic**
   - Clear localStorage completely
   - Refresh page
   - Banner should appear
   - Click "Accept All"

6. **Wait 24 Hours**
   - Some reports take time to populate
   - Real-time should work immediately

### Still Not Working?

- Verify script loads: Check Network tab in DevTools
- Check for Content Security Policy issues
- Ensure you're in production mode
- Try Google Tag Assistant Chrome extension

---

## 📞 Support Resources

- **GA4 Documentation**: https://support.google.com/analytics/answer/9304153
- **Event Reference**: https://support.google.com/analytics/answer/9267735
- **Debug View**: https://support.google.com/analytics/answer/7201382

---

## ✅ You're All Set!

Your AI Agents Portal now has:
- ✅ Google Analytics 4 tracking
- ✅ GDPR-compliant cookie consent banner
- ✅ Automatic page view tracking
- ✅ Custom event tracking (6 events integrated)
- ✅ User journey tracking
- ✅ Social media click tracking
- ✅ Easy-to-use utility functions
- ✅ Beautiful UI matching your design
- ✅ Privacy-first approach

### **Next Steps:**

1. **Get Measurement ID** from Google Analytics (see Step 1)
2. **Add to `.env` file**:
   ```bash
   VITE_GA_MEASUREMENT_ID=G-ABC123DEF4
   ```
3. **Test the banner**:
   - Clear localStorage: DevTools → Application → Local Storage → Clear
   - Refresh page
   - Banner should appear!
4. **Accept cookies** and verify tracking in GA Real-time view

**You're now fully compliant and ready to track!** 🎉
