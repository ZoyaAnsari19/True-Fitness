export default function Home() {
  return (
    <>
      {/* Animated Background Orbs */}
      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <div className="grid-overlay" aria-hidden="true"></div>

      {/* Navbar */}
      <nav id="navbar" className="navbar">
        <div className="nav-inner">
          <a href="#home" className="logo-wrap">
            <span className="logo-icon"><i className="fa-solid fa-bolt"></i></span>
            <span className="logo-text">TRUE<span className="accent">FITNESS</span></span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#membership">Membership</a>
            <a href="#tracking">Tracking</a>
            <a href="#testimonials">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-actions">
            <a href="#login" className="btn btn-ghost">Member Login</a>
            <a href="#join" className="btn btn-primary">Join Now</a>
          </div>
          <button id="menuToggle" className="menu-toggle" aria-label="Open menu">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <div id="mobileMenu" className="mobile-menu">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#membership">Membership</a>
          <a href="#tracking">Tracking</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact">Contact</a>
          <a href="#login" className="btn btn-ghost full">Member Login</a>
          <a href="#join" className="btn btn-primary full">Join Now</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="container hero-inner">
          <div className="hero-text reveal">
            <span className="eyebrow">
              <span className="dot"></span> #1 Premium Fitness Experience
            </span>
            <h1 className="hero-title">
              Transform Your <span className="gradient-text">Fitness Journey</span> With True Fitness
            </h1>
            <p className="hero-sub">
              Professional gym training, workout tracking, personal coaching, diet plans, and membership management — all in one place.
            </p>
            <div className="hero-cta">
              <a href="#join" className="btn btn-primary btn-lg">
                <i className="fa-solid fa-dumbbell"></i> Join Now
              </a>
              <a href="#login" className="btn btn-ghost btn-lg">
                <i className="fa-solid fa-arrow-right-to-bracket"></i> Member Login
              </a>
            </div>
            <div className="hero-stats">
              <div><strong>10K+</strong><span>Active Members</span></div>
              <div><strong>50+</strong><span>Expert Trainers</span></div>
              <div><strong>4.9★</strong><span>Member Rating</span></div>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-card hero-card-main float-slow">
              <div className="card-head">
                <span className="pulse-dot"></span>
                <span>Live Workout Session</span>
              </div>
              <div className="card-body">
                <div className="exercise-row">
                  <i className="fa-solid fa-person-running"></i>
                  <div className="meta">
                    <span className="t">Treadmill Sprint</span>
                    <span className="s">12 min · 380 kcal</span>
                  </div>
                  <div className="bar"><div className="fill" style={{ width: "78%" }}></div></div>
                </div>
                <div className="exercise-row">
                  <i className="fa-solid fa-dumbbell"></i>
                  <div className="meta">
                    <span className="t">Chest Press</span>
                    <span className="s">4 sets · 12 reps</span>
                  </div>
                  <div className="bar"><div className="fill" style={{ width: "62%" }}></div></div>
                </div>
                <div className="exercise-row">
                  <i className="fa-solid fa-heart-pulse"></i>
                  <div className="meta">
                    <span className="t">Heart Rate</span>
                    <span className="s">142 bpm · Optimal Zone</span>
                  </div>
                  <div className="bar"><div className="fill" style={{ width: "88%" }}></div></div>
                </div>
              </div>
            </div>

            <div className="hero-card hero-card-side float-fast">
              <div className="mini-stat">
                <i className="fa-solid fa-fire"></i>
                <div>
                  <span className="num">1,248</span>
                  <span className="lbl">Calories Today</span>
                </div>
              </div>
            </div>

            <div className="hero-card hero-card-bottom float-slow-rev">
              <div className="mini-stat">
                <i className="fa-solid fa-trophy"></i>
                <div>
                  <span className="num">28 Days</span>
                  <span className="lbl">Active Streak</span>
                </div>
              </div>
            </div>

            <div className="hero-blob" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow"><i className="fa-solid fa-fire"></i> About Us</span>
            <h2 className="section-title">Built For Those Who <span className="gradient-text">Refuse To Settle</span></h2>
            <p className="section-sub">
              True Fitness is more than a gym — it&apos;s a premium fitness destination engineered for results.
              We blend professional training, smart workout management, and a luxury training environment so every
              member can train smarter, recover better, and transform faster.
            </p>
          </div>

          <div className="about-grid">
            <div className="glass-card about-card reveal">
              <div className="ic"><i className="fa-solid fa-bullseye"></i></div>
              <h3>Our Mission</h3>
              <p>Empower every member with the tools, coaching, and environment needed to achieve real, lasting fitness results.</p>
            </div>
            <div className="glass-card about-card reveal">
              <div className="ic"><i className="fa-solid fa-eye"></i></div>
              <h3>Our Vision</h3>
              <p>Redefine the modern gym experience by combining elite training with intelligent fitness management for everyone.</p>
            </div>
            <div className="glass-card about-card reveal">
              <div className="ic"><i className="fa-solid fa-shield-halved"></i></div>
              <h3>Why Trust Us</h3>
              <p>Certified trainers, premium equipment, structured programs, and a community that pushes you to be your strongest self.</p>
            </div>
            <div className="glass-card about-card reveal">
              <div className="ic"><i className="fa-solid fa-medal"></i></div>
              <h3>Pro Environment</h3>
              <p>A clean, modern, energy-charged training space designed to keep you focused, motivated, and consistent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow"><i className="fa-solid fa-bolt"></i> Features</span>
            <h2 className="section-title">Everything You Need To <span className="gradient-text">Train Smarter</span></h2>
            <p className="section-sub">A complete fitness ecosystem built around your goals — training, tracking, nutrition, and coaching in one premium experience.</p>
          </div>

          <div className="features-grid">
            <FeatureCard icon="fa-solid fa-clipboard-check" title="Daily Attendance"
              desc="Effortless attendance tracking with quick member check-ins and organized records for every visit." />
            <FeatureCard icon="fa-solid fa-utensils" title="Diet Plan"
              desc="Personalized diet plans with nutrition guidance and healthy meal recommendations tailored to your goals." />
            <FeatureCard icon="fa-solid fa-dumbbell" title="Exercise Training"
              desc="Professional workout routines, guided exercise training, and structured fitness improvement programs." />
            <FeatureCard icon="fa-solid fa-user-tie" title="Personal Coaching"
              desc="One-on-one coaching with expert trainers offering personalized fitness guidance and accountability." />
            <FeatureCard icon="fa-solid fa-envelope-open-text" title="Contact Form"
              desc="Easy inquiry submission, quick communication, and reliable member support assistance whenever you need it." />
            <FeatureCard icon="fa-solid fa-lock" title="Member Login"
              desc="Secure member login with personal account access for easy and private fitness management." />
            <FeatureCard icon="fa-solid fa-chart-line" title="Workout Tracking"
              desc="Daily workout monitoring, progress tracking, and powerful performance improvement insights." />
            <FeatureCard icon="fa-solid fa-id-card" title="Choose Our Membership"
              desc="Flexible membership plans, affordable packages, and easy plan selection that fits your lifestyle." />
            <FeatureCard icon="fa-solid fa-circle-info" title="About Us"
              desc="Discover our gym background, fitness philosophy, and the professional environment we've built for you." />
            <FeatureCard icon="fa-solid fa-rocket" title="Join Now"
              desc="Easy registration process, quick membership signup, and start your fitness journey instantly." />
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section id="membership" className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow"><i className="fa-solid fa-id-card"></i> Membership</span>
            <h2 className="section-title">Choose Your <span className="gradient-text">Membership Plan</span></h2>
            <p className="section-sub">Flexible, transparent, and built for every fitness level. Upgrade or downgrade anytime.</p>
          </div>

          <div className="plans-grid">
            <div className="glass-card plan reveal">
              <div className="plan-head">
                <h3>Basic</h3>
                <p>Perfect for getting started</p>
              </div>
              <div className="price"><span className="currency">$</span><span className="amount">29</span><span className="per">/month</span></div>
              <ul className="plan-features">
                <li><i className="fa-solid fa-check"></i> Full gym access</li>
                <li><i className="fa-solid fa-check"></i> Daily attendance tracking</li>
                <li><i className="fa-solid fa-check"></i> Basic workout routines</li>
                <li><i className="fa-solid fa-check"></i> Member login portal</li>
                <li className="muted"><i className="fa-solid fa-xmark"></i> Personal coaching</li>
                <li className="muted"><i className="fa-solid fa-xmark"></i> Custom diet plan</li>
              </ul>
              <a href="#join" className="btn btn-ghost full">Join Now</a>
            </div>

            <div className="glass-card plan popular reveal">
              <span className="popular-badge">Most Popular</span>
              <div className="plan-head">
                <h3>Pro</h3>
                <p>For consistent achievers</p>
              </div>
              <div className="price"><span className="currency">$</span><span className="amount">59</span><span className="per">/month</span></div>
              <ul className="plan-features">
                <li><i className="fa-solid fa-check"></i> Everything in Basic</li>
                <li><i className="fa-solid fa-check"></i> Workout tracking dashboard</li>
                <li><i className="fa-solid fa-check"></i> Personalized diet plan</li>
                <li><i className="fa-solid fa-check"></i> Group training sessions</li>
                <li><i className="fa-solid fa-check"></i> Progress insights</li>
                <li className="muted"><i className="fa-solid fa-xmark"></i> 1-on-1 personal coaching</li>
              </ul>
              <a href="#join" className="btn btn-primary full">Join Now</a>
            </div>

            <div className="glass-card plan reveal">
              <div className="plan-head">
                <h3>Premium</h3>
                <p>Elite training experience</p>
              </div>
              <div className="price"><span className="currency">$</span><span className="amount">99</span><span className="per">/month</span></div>
              <ul className="plan-features">
                <li><i className="fa-solid fa-check"></i> Everything in Pro</li>
                <li><i className="fa-solid fa-check"></i> 1-on-1 personal coaching</li>
                <li><i className="fa-solid fa-check"></i> Advanced diet & nutrition</li>
                <li><i className="fa-solid fa-check"></i> Priority member support</li>
                <li><i className="fa-solid fa-check"></i> Unlimited training hours</li>
                <li><i className="fa-solid fa-check"></i> Exclusive members-only events</li>
              </ul>
              <a href="#join" className="btn btn-primary full">Join Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* WORKOUT TRACKING SHOWCASE */}
      <section id="tracking" className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow"><i className="fa-solid fa-chart-line"></i> Workout Tracking</span>
            <h2 className="section-title">See Every Rep, Every <span className="gradient-text">Calorie, Every Win</span></h2>
            <p className="section-sub">Smart fitness tracking that turns your effort into real, measurable progress.</p>
          </div>

          <div className="tracking-wrap">
            <div className="tracking-left reveal">
              <div className="glass-card track-card">
                <div className="track-head">
                  <div>
                    <h4>Weekly Progress</h4>
                    <span className="small">Last 7 days</span>
                  </div>
                  <span className="pill up"><i className="fa-solid fa-arrow-trend-up"></i> +18%</span>
                </div>
                <div className="chart">
                  <div className="bar-col"><span style={{ height: "40%" }}></span><em>M</em></div>
                  <div className="bar-col"><span style={{ height: "65%" }}></span><em>T</em></div>
                  <div className="bar-col"><span style={{ height: "55%" }}></span><em>W</em></div>
                  <div className="bar-col"><span style={{ height: "80%" }}></span><em>T</em></div>
                  <div className="bar-col"><span style={{ height: "70%" }}></span><em>F</em></div>
                  <div className="bar-col"><span style={{ height: "90%" }}></span><em>S</em></div>
                  <div className="bar-col"><span style={{ height: "75%" }}></span><em>S</em></div>
                </div>
              </div>

              <div className="glass-card track-card row-stats">
                <div className="rs">
                  <i className="fa-solid fa-fire"></i>
                  <div><strong data-count="8420">0</strong><span>Calories Burned</span></div>
                </div>
                <div className="rs">
                  <i className="fa-solid fa-stopwatch"></i>
                  <div><strong data-count="312">0</strong><span>Active Minutes</span></div>
                </div>
                <div className="rs">
                  <i className="fa-solid fa-medal"></i>
                  <div><strong data-count="47">0</strong><span>Goals Achieved</span></div>
                </div>
              </div>
            </div>

            <div className="tracking-right reveal">
              <div className="glass-card ring-card">
                <div className="ring-wrap">
                  <svg viewBox="0 0 120 120" className="ring">
                    <circle cx="60" cy="60" r="50" className="ring-bg" />
                    <circle cx="60" cy="60" r="50" className="ring-fg" />
                  </svg>
                  <div className="ring-center">
                    <strong>82%</strong>
                    <span>Daily Goal</span>
                  </div>
                </div>
                <div className="ring-info">
                  <h4>Today&apos;s Activity</h4>
                  <p>You&apos;re crushing it — only 18% left to hit today&apos;s training goal.</p>
                </div>
              </div>

              <div className="glass-card exercise-list">
                <h4>Today&apos;s Exercises</h4>
                <div className="ex-item"><i className="fa-solid fa-person-running"></i><span>Cardio · 25 min</span><em>Done</em></div>
                <div className="ex-item"><i className="fa-solid fa-dumbbell"></i><span>Strength · 45 min</span><em>Done</em></div>
                <div className="ex-item active"><i className="fa-solid fa-spa"></i><span>Stretching · 15 min</span><em>Now</em></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow"><i className="fa-solid fa-star"></i> Testimonials</span>
            <h2 className="section-title">Real People. <span className="gradient-text">Real Transformations.</span></h2>
            <p className="section-sub">Stories from our members and trainers who made True Fitness their daily home.</p>
          </div>

          <div className="testi-track" id="testiTrack">
            <div className="testi-row" id="testiRow">
              <TestiCard name="Sarah Mitchell" role="Member · 1 year"
                text="True Fitness completely changed my routine. The coaches actually care, the equipment is premium, and the workout tracking keeps me consistent."
                stars={5} />
              <TestiCard name="James Carter" role="Personal Training Client"
                text="The one-on-one coaching is next level. I've gained 8kg of lean muscle in 5 months — better than any gym I've trained at before."
                stars={5} />
              <TestiCard name="Aisha Khan" role="Member · 6 months"
                text="The diet plan + workout combo is amazing. I lost 12kg and finally feel strong, energetic, and confident."
                stars={5} />
              <TestiCard name="Marco Rossi" role="Head Trainer"
                text="As a trainer, True Fitness gives me everything I need to deliver real results — attendance, plans, tracking, all in one place."
                stars={5} />
              <TestiCard name="Priya Sharma" role="Member · 3 months"
                text="Clean, modern, professional. Honestly the most premium gym experience I've had — feels like a luxury fitness club."
                stars={5} />
              <TestiCard name="David Lee" role="Member · 2 years"
                text="Workout tracking and personal coaching made all the difference. I'm in the best shape of my life."
                stars={5} />
            </div>
          </div>

          <div className="testi-controls">
            <button id="testiPrev" className="t-btn" aria-label="Previous"><i className="fa-solid fa-chevron-left"></i></button>
            <button id="testiNext" className="t-btn" aria-label="Next"><i className="fa-solid fa-chevron-right"></i></button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow"><i className="fa-solid fa-envelope"></i> Contact</span>
            <h2 className="section-title">Have Questions? <span className="gradient-text">Let&apos;s Talk.</span></h2>
            <p className="section-sub">Reach out and our team will get back to you within 24 hours.</p>
          </div>

          <div className="contact-wrap">
            <form className="glass-card contact-form reveal" id="contactForm" noValidate>
              <div className="field">
                <input type="text" id="cf-name" required autoComplete="name" />
                <label htmlFor="cf-name">Full Name</label>
                <span className="line"></span>
              </div>
              <div className="field">
                <input type="email" id="cf-email" required autoComplete="email" />
                <label htmlFor="cf-email">Email Address</label>
                <span className="line"></span>
              </div>
              <div className="field">
                <input type="tel" id="cf-phone" required autoComplete="tel" />
                <label htmlFor="cf-phone">Phone Number</label>
                <span className="line"></span>
              </div>
              <div className="field">
                <textarea id="cf-message" rows={4} required></textarea>
                <label htmlFor="cf-message">Your Message</label>
                <span className="line"></span>
              </div>
              <button type="submit" className="btn btn-primary btn-lg full">
                <i className="fa-solid fa-paper-plane"></i> Send Message
              </button>
              <p id="cf-status" className="form-status"></p>
            </form>

            <div className="contact-info reveal">
              <div className="glass-card info-card">
                <div className="ic"><i className="fa-solid fa-location-dot"></i></div>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Iron Avenue, Fitness District<br />Los Angeles, CA 90001</p>
                </div>
              </div>
              <div className="glass-card info-card">
                <div className="ic"><i className="fa-solid fa-phone"></i></div>
                <div>
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-4567<br />Mon - Sun · 6am - 11pm</p>
                </div>
              </div>
              <div className="glass-card info-card">
                <div className="ic"><i className="fa-solid fa-envelope"></i></div>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@truefitness.com<br />support@truefitness.com</p>
                </div>
              </div>
              <div className="socials">
                <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
                <a href="#" aria-label="TikTok"><i className="fa-brands fa-tiktok"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="join" className="section final-cta-wrap">
        <div className="container">
          <div className="final-cta reveal">
            <div className="cta-glow" aria-hidden="true"></div>
            <span className="eyebrow"><i className="fa-solid fa-bolt"></i> Limited Spots Available</span>
            <h2 className="section-title">Start Your <span className="gradient-text">Fitness Transformation</span> Today</h2>
            <p className="section-sub">
              Join True Fitness and achieve your fitness goals with expert coaching, workout tracking, and professional guidance.
            </p>
            <div className="hero-cta center">
              <a href="#membership" className="btn btn-primary btn-lg">
                <i className="fa-solid fa-dumbbell"></i> Join Now
              </a>
              <a href="#login" className="btn btn-ghost btn-lg">
                <i className="fa-solid fa-arrow-right-to-bracket"></i> Member Login
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo-wrap">
              <span className="logo-icon"><i className="fa-solid fa-bolt"></i></span>
              <span className="logo-text">TRUE<span className="accent">FITNESS</span></span>
            </a>
            <p>Premium gym management. Real results. Built for those who refuse to settle.</p>
            <div className="socials small">
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Navigation</h5>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#membership">Membership</a>
            <a href="#tracking">Tracking</a>
            <a href="#testimonials">Reviews</a>
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            <a href="#join">Join Now</a>
            <a href="#login">Member Login</a>
            <a href="#contact">Contact</a>
            <a href="#features">Diet Plan</a>
            <a href="#features">Personal Coaching</a>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <p><i className="fa-solid fa-location-dot"></i> 123 Iron Avenue, LA</p>
            <p><i className="fa-solid fa-phone"></i> +1 (555) 123-4567</p>
            <p><i className="fa-solid fa-envelope"></i> hello@truefitness.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} True Fitness. All rights reserved.</span>
          <span>Crafted with <i className="fa-solid fa-heart"></i> for fitness.</span>
        </div>
      </footer>
    </>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="glass-card feature-card reveal">
      <div className="ic"><i className={icon}></i></div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <span className="card-shine" aria-hidden="true"></span>
    </div>
  );
}

function TestiCard({ name, role, text, stars }: { name: string; role: string; text: string; stars: number }) {
  return (
    <div className="glass-card testi-card">
      <div className="stars">
        {Array.from({ length: stars }).map((_, i) => (
          <i key={i} className="fa-solid fa-star"></i>
        ))}
      </div>
      <p className="quote">&quot;{text}&quot;</p>
      <div className="who">
        <div className="avatar">{name.split(" ").map((n) => n[0]).join("").slice(0, 2)}</div>
        <div>
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
}
