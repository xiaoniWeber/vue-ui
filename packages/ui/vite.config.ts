import { defineConfig } from 'vite';
import { generateVueConfig } from '../build/build.config';

type ModeProps = 'package' | 'full' | 'full-min';

export default defineConfig(({ mode }) => generateVueConfig({ mode: mode as ModeProps }));
