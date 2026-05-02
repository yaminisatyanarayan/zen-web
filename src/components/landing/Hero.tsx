import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "motion/react";
import { Button } from "@/src/components/ui/Button";
import { Badge } from "@/src/components/ui/Badge";
import { Play, TrendingUp, AlertCircle, Bot } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const ShaderGradientCanvas = React.lazy(() => import('@shadergradient/react').then((mod) => ({ default: mod.ShaderGradientCanvas })));
const ShaderGradient = React.lazy(() => import('@shadergradient/react').then((mod) => ({ default: mod.ShaderGradient })));
const Particles = React.lazy(() => import('@tsparticles/react').then((mod) => ({ default: mod.default })));

const data = [
  { value: 400 },
  { value: 300 },
  { value: 600 },
  { value: 500 },
  { value: 800 },
  { value: 700 },
  { value: 900 },
];

const loadFull = async (engine: any) => {
    const { loadSlim } = await import("@tsparticles/slim");
    await loadSlim(engine);
};

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const x = useSpring(useTransform(mouseX, [0, window.innerWidth], [-20, 20]), { stiffness: 50, damping: 20 });
  const y = useSpring(useTransform(mouseY, [0, window.innerHeight], [-20, 20]), { stiffness: 50, damping: 20 });

  const count = useMotionValue(12.0);
  const rounded = useTransform(count, (latest) => latest.toFixed(1));

  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    import("@tsparticles/react").then((mod) => {
        mod.initParticlesEngine(async (engine) => {
            const { loadSlim } = await import("@tsparticles/slim");
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    });

    const animation = animate(count, 2.1, {
      duration: 1.5,
      ease: "easeOut",
      delay: 0.5,
    });
    return animation.stop;
  }, []);

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <React.Suspense fallback={<div className="w-full h-full bg-navy" />}>
          <ShaderGradientCanvas 
            style={{ position: 'absolute', top: 0 }}
            pointerEvents='none'
          >
            {/* @ts-ignore */}
            <ShaderGradient
                control="props"
                color1='#0A1F44'
                color2='#FF6B5C'
                color3='#7C5CFF'
                uSpeed={0.2}
            />
          </ShaderGradientCanvas>
        </React.Suspense>
        <div className="absolute inset-0 bg-navy/30 mix-blend-multiply" />
      </div>

      <div className="absolute inset-0 z-1">
        <React.Suspense fallback={null}>
          {init && (
            <Particles
                id="tsparticles"
                options={{
                    particles: {
                        number: { value: 30 },
                        color: { value: "#ffffff" },
                        opacity: { value: 0.2 },
                        size: { value: 2 },
                        move: {
                            enable: true,
                            speed: 0.5,
                            direction: "none",
                            random: true,
                            straight: false,
                            outModes: { default: "out" },
                        },
                    },
                    interactivity: { events: { onHover: { enable: false } } },
                }}
            />
          )}
        </React.Suspense>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gold text-sm font-bold tracking-[0.2em] uppercase"
            >
              EXECUTIVE FINANCE INTELLIGENCE
            </motion.span>
            <h1 className="text-white text-5xl lg:text-7xl font-bold tracking-tight leading-[0.95]">
              Close your books in <span className="text-primary">2 days</span>, not <span className="text-primary">12</span>.
            </h1>
            <p className="text-white/80 text-xl max-w-xl leading-relaxed">
              The AI finance workforce built for CFOs who can't afford hallucinations. Connects to your ERP, CRM, and banks — delivers audit-ready insights in real time.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="xl" variant="coral">Book a demo</Button>
            <Button size="xl" variant="ghost" className="text-white border-white/20 hover:bg-white/10 flex gap-2">
              <Play className="w-5 h-5 fill-white" />
              See it live
            </Button>
          </div>
        </motion.div>

        {/* Floating Cards */}
        <div className="relative h-[600px] hidden lg:block">
          {/* Cash Flow Chart */}
          <motion.div
            style={{ x, y }}
            className="absolute top-10 right-0 w-full max-w-[440px]"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-2xl p-8 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-white font-medium">Predictive Cash Flow</span>
                <Badge variant="gold">Live</Badge>
              </div>
              <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#FF6B5C" 
                      strokeWidth={3} 
                      dot={false}
                      animationDuration={1500}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </motion.div>

          {/* KPI Card */}
          <motion.div
            style={{ x: useSpring(useTransform(mouseX, [0, window.innerWidth], [-40, 40])), y: useSpring(useTransform(mouseY, [0, window.innerHeight], [-40, 40])) }}
            className="absolute top-60 left-10"
          >
             <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-card rounded-xl p-6 shadow-xl backdrop-blur-xl w-60"
            >
              <div className="text-white/60 text-sm mb-1">Days to close</div>
              <div className="text-4xl font-bold text-white flex items-baseline gap-2">
                <motion.span>{rounded}</motion.span>
                <span className="text-emerald-400 text-sm flex items-center gap-0.5">
                  <TrendingUp className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* AI Insight Card */}
          <motion.div
            style={{ x: useSpring(useTransform(mouseX, [0, window.innerWidth], [-10, 10])), y: useSpring(useTransform(mouseY, [0, window.innerHeight], [-10, 10])) }}
            className="absolute bottom-20 right-10"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glass-card rounded-xl p-6 shadow-xl backdrop-blur-xl max-w-sm border-primary/20 animate-pulse border-2"
            >
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-violet/20 flex items-center justify-center text-violet">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="text-white font-medium mb-1 flex items-center gap-2">
                    AI Insight
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Anomaly detected in Account 4471 — duplicate transaction pattern found.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
