import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {
  listModelKeys,
  listModelLabels,
  seedModelEntries
} from '../../utils/seedGenerators.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const usage = `
Seed specified collections with generated test data.

Usage:
  node config/commands/seedModel.js --model <model> [--count <n>]
  node config/commands/seedModel.js <model> [count]

Options:
  -m, --model   Target model key (${listModelKeys().join(', ')})
  -c, --count   Number of documents to create (default: 10)
      --list    Print supported models
  -h, --help    Show this message
`;

const parseArgs = () => {
  const args = process.argv.slice(2);
  const options = { count: 10 };
  let positionalIndex = 0;

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    switch (arg) {
      case '--model':
      case '-m':
        options.model = args[index + 1];
        index += 1;
        break;
      case '--count':
      case '-c':
        options.count = parseInt(args[index + 1], 10);
        index += 1;
        break;
      case '--list':
        options.list = true;
        break;
      case '--help':
      case '-h':
        options.help = true;
        break;
      default:
        if (arg.startsWith('-')) {
          console.error(`Unknown option: ${arg}`);
          options.help = true;
        } else if (positionalIndex === 0) {
          options.model = arg;
          positionalIndex += 1;
        } else if (positionalIndex === 1) {
          options.count = parseInt(arg, 10);
          positionalIndex += 1;
        } else {
          console.warn(`Ignoring extra argument: ${arg}`);
        }
    }
  }

  if (Number.isNaN(options.count) || options.count <= 0) {
    options.count = 10;
  }

  return options;
};

const run = async () => {
  const options = parseArgs();

  if (options.help) {
    console.log(usage);
    return;
  }

  if (options.list) {
    console.log('Supported models:', listModelLabels().join(', '));
    console.log('Model keys:', listModelKeys().join(', '));
    return;
  }

  if (!options.model) {
    console.error('Error: model is required.\n');
    console.log(usage);
    process.exitCode = 1;
    return;
  }

  if (!MONGO_URI) {
    console.error('Missing MONGO_URI environment variable.');
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    const result = await seedModelEntries(options.model, options.count);
    console.log(
      `✅ Seeded ${result.insertedCount} ${result.modelLabel} document(s).`
    );
  } catch (error) {
    console.error('❌ Error seeding data:', error.message);
    if (process.env.DEBUG_SEED === 'true') {
      console.error(error);
    }
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log('🔒 MongoDB disconnected');
  }
};

run();
