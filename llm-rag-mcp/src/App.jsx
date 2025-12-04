import "./App.css";
import MyAccordion from "./components/MyAccordion";

function App() {
  return (
    <>
      <h1>LLM, RAG, AI Agents & MCP</h1>

      <MyAccordion title="What are these concepts?">
        <h2>LLM (Large Language Model)</h2>
        <p>
          The foundational AI model (like Claude, GPT-4, Llama) that understands
          and generates natural language. It's the "brain" that processes text
          and makes decisions.
        </p>
        <p>
          <strong>Examples:</strong> Claude Sonnet 4, GPT-4, Llama 3, Gemini
        </p>

        <h2>AI Agent</h2>
        <p>
          A system built on top of an LLM that can autonomously take actions,
          use tools, and complete tasks. The agent uses the LLM for reasoning
          but adds capabilities like tool usage, memory, and planning.
        </p>
        <p>
          <strong>Key capability:</strong> Makes decisions about what to do next
          without constant human input
        </p>

        <h2>RAG (Retrieval-Augmented Generation)</h2>
        <p>
          A technique where the AI retrieves relevant information from external
          sources before generating a response. This helps the LLM access
          up-to-date or domain-specific information beyond its training data.
        </p>
        <p>
          <strong>Why it matters:</strong> Prevents hallucinations and provides
          current information
        </p>

        <h2>Embedding</h2>
        <p>
          The process of converting text into numerical vectors (arrays of
          numbers) that capture semantic meaning. Similar words/documents have
          similar vectors.
        </p>
        <p>
          <strong>Example:</strong> "dog" and "puppy" have similar embeddings
        </p>

        <h2>Vector</h2>
        <p>
          The actual numerical representation of text - typically an array of
          hundreds or thousands of numbers.
        </p>
        <p>
          <strong>Example:</strong> [0.234, -0.891, 0.456, ...] (1536 dimensions
          for OpenAI)
        </p>

        <h2>Token</h2>
        <p>The basic unit of text that LLMs process. Roughly ¾ of a word.</p>
        <p>
          <strong>Example:</strong> "understanding" = ["under", "standing"] = 2
          tokens
        </p>

        <h2>MCP Server (Model Context Protocol)</h2>
        <p>
          A standardized way for AI agents to connect to external tools and data
          sources. Provides structured interfaces for databases, APIs, file
          systems, etc.
        </p>
        <p>
          <strong>Think of it as:</strong> USB ports for AI - plug and play
          connections to any tool
        </p>
      </MyAccordion>

      <MyAccordion title="How do these concepts relate?">
        <h2>The Connection Flow</h2>
        <ol>
          <li>
            <strong>LLM</strong> is the foundation - the brain doing the
            thinking
          </li>
          <li>
            <strong>AI Agent</strong> wraps the LLM to add autonomous
            decision-making
          </li>
          <li>
            <strong>RAG</strong> helps the agent retrieve relevant context
            using:
          </li>
          <ul>
            <li>
              <strong>Embeddings</strong> to convert text to vectors
            </li>
            <li>
              <strong>Vector databases</strong> to store and search these
              vectors
            </li>
          </ul>
          <li>
            <strong>MCP Servers</strong> connect the agent to external tools
          </li>
          <li>
            Everything is processed in <strong>tokens</strong> for the LLM
          </li>
        </ol>

        <h2>Real-World Analogy</h2>
        <ul>
          <li>
            <strong>LLM:</strong> A smart assistant's brain
          </li>
          <li>
            <strong>AI Agent:</strong> The assistant who can take action
          </li>
          <li>
            <strong>RAG:</strong> The assistant's ability to look things up in a
            library
          </li>
          <li>
            <strong>Embeddings/Vectors:</strong> The library's indexing system
          </li>
          <li>
            <strong>MCP:</strong> The assistant's phone/computer for calling
            services
          </li>
          <li>
            <strong>Tokens:</strong> The words the assistant reads at a time
          </li>
        </ul>
      </MyAccordion>

      <MyAccordion title="Why do we need AI agents with RAG?">
        <h2>What Problems Do They Solve?</h2>

        <h3>Problem 1: LLMs Have Limited Knowledge</h3>
        <ul>
          <li>Training data has a cutoff date</li>
          <li>Can't access private company data</li>
          <li>Doesn't know about recent events</li>
        </ul>
        <p>
          <strong>Solution:</strong> RAG retrieves current/private information
        </p>

        <h3>Problem 2: LLMs Can Hallucinate</h3>
        <ul>
          <li>Make up facts that sound plausible</li>
          <li>Provide incorrect information confidently</li>
        </ul>
        <p>
          <strong>Solution:</strong> RAG grounds responses in actual retrieved
          documents
        </p>

        <h3>Problem 3: One-Time Responses Aren't Enough</h3>
        <ul>
          <li>Complex tasks need multiple steps</li>
          <li>Need to use tools (search, APIs, databases)</li>
          <li>Require decision-making and planning</li>
        </ul>
        <p>
          <strong>Solution:</strong> AI agents can take autonomous actions
        </p>

        <h3>Problem 4: Connecting to External Systems Is Hard</h3>
        <ul>
          <li>Each tool has different interfaces</li>
          <li>Lots of custom integration code needed</li>
        </ul>
        <p>
          <strong>Solution:</strong> MCP provides standardized connections
        </p>

        <h2>What Happens Without These Technologies?</h2>
        <ul>
          <li>❌ Outdated responses based on training data only</li>
          <li>❌ No access to company-specific knowledge</li>
          <li>❌ Can't perform multi-step tasks</li>
          <li>❌ Limited to conversation only, no actions</li>
          <li>❌ Expensive custom integrations for every tool</li>
        </ul>
      </MyAccordion>

      <MyAccordion title="How does it work? (Architecture)">
        <h2>Core Components</h2>

        <h3>1. Frontend Layer</h3>
        <ul>
          <li>
            <strong>Next.js / React:</strong> User interface
          </li>
          <li>
            <strong>WebSocket:</strong> Real-time streaming responses
          </li>
        </ul>

        <h3>2. Backend Layer</h3>
        <ul>
          <li>
            <strong>FastAPI / Node.js:</strong> API server
          </li>
          <li>
            <strong>LangChain/LangGraph:</strong> Agent orchestration framework
          </li>
        </ul>

        <h3>3. Data Layer</h3>
        <ul>
          <li>
            <strong>Vector Database:</strong> Pinecone, Chroma, FAISS, Weaviate
          </li>
          <li>
            <strong>Stores:</strong> Document embeddings for similarity search
          </li>
        </ul>

        <h3>4. AI Layer</h3>
        <ul>
          <li>
            <strong>LLM Providers:</strong> OpenAI, Anthropic (Claude), Groq
          </li>
          <li>
            <strong>Embedding Models:</strong> OpenAI embeddings, Cohere
          </li>
        </ul>

        <h3>5. Tool/Integration Layer</h3>
        <ul>
          <li>
            <strong>MCP Servers:</strong> Standardized tool connections
          </li>
          <li>
            <strong>Custom Tools:</strong> Search APIs, databases, internal
            systems
          </li>
        </ul>

        <h3>6. Observability Layer</h3>
        <ul>
          <li>
            <strong>LangSmith:</strong> Tracing, debugging, monitoring
          </li>
          <li>
            <strong>Tracks:</strong> Agent decisions, tool calls, performance
          </li>
        </ul>
      </MyAccordion>

      <MyAccordion title="How does it work? (Workflow)">
        {/* <h2>Complete RAG + Agent Workflow</h2>
        <img
          src={workflowImage}
          alt="Detailed workflow diagram showing RAG and agent process"
        /> */}

        <h2>Phase 1: Data Preparation (One-Time Setup)</h2>
        <ol>
          <li>
            <strong>Load Documents:</strong> PDF, web pages, databases, text
            files
          </li>
          <li>
            <strong>Chunk Text:</strong> Split into smaller pieces (e.g., 1000
            characters with 200 overlap)
          </li>
          <li>
            <strong>Generate Embeddings:</strong> Convert chunks to vectors
            using embedding model
          </li>
          <li>
            <strong>Store in Vector DB:</strong> Save embeddings with metadata
            in Pinecone/Chroma
          </li>
        </ol>

        <h2>Phase 2: Query Processing (Runtime)</h2>
        <ol>
          <li>
            <strong>User Question:</strong> "What was our Q3 revenue?"
          </li>
          <li>
            <strong>Agent Reasoning:</strong> LLM decides if it needs to
            retrieve information
          </li>
          <li>
            <strong>Tool Selection:</strong> Agent decides to use RAG retrieval
            tool
          </li>
        </ol>

        <h2>Phase 3: Retrieval (RAG)</h2>
        <ol>
          <li>
            <strong>Embed Query:</strong> Convert user question to vector
          </li>
          <li>
            <strong>Similarity Search:</strong> Find most similar document
            chunks in vector DB
          </li>
          <li>
            <strong>Retrieve Top Results:</strong> Get top 3-5 most relevant
            chunks
          </li>
          <li>
            <strong>Format Context:</strong> Prepare retrieved documents for LLM
          </li>
        </ol>

        <h2>Phase 4: Generation</h2>
        <ol>
          <li>
            <strong>Combine:</strong> Original question + retrieved context
          </li>
          <li>
            <strong>Send to LLM:</strong> Full prompt with context
          </li>
          <li>
            <strong>Generate Response:</strong> LLM creates answer based on
            retrieved info
          </li>
          <li>
            <strong>Return to User:</strong> Display response with sources
          </li>
        </ol>

        <h2>Phase 5: Agent Loop (For Complex Tasks)</h2>
        <ol>
          <li>
            <strong>Evaluate:</strong> Is task complete?
          </li>
          <li>
            <strong>If No:</strong> Agent decides next action (search more, use
            tool, etc.)
          </li>
          <li>
            <strong>Execute:</strong> Perform the action
          </li>
          <li>
            <strong>Update State:</strong> Add results to conversation history
          </li>
          <li>
            <strong>Repeat:</strong> Back to step 1 until task complete
          </li>
        </ol>

        <h2>Key Insight</h2>
        <p>
          The agent can loop through steps 2-5 multiple times, making decisions
          at each step. Modern agents average 7.7 steps per task (up from 2.8 in
          2023), showing increasing sophistication.
        </p>
      </MyAccordion>

      <MyAccordion title="Tools / Libraries / Services">
        <h2>Orchestration Frameworks</h2>
        <ul>
          <li>
            <strong>LangChain:</strong> High-level chains and agents (easier to
            start)
          </li>
          <li>
            <strong>LangGraph:</strong> Low-level graph-based workflows (more
            control)
          </li>
          <li>
            <strong>LlamaIndex:</strong> Specialized for data indexing and
            retrieval
          </li>
          <li>
            <strong>AutoGen:</strong> Microsoft's multi-agent framework
          </li>
        </ul>

        <h2>Vector Databases</h2>
        <ul>
          <li>
            <strong>Pinecone:</strong> Managed, scalable (popular for
            production)
          </li>
          <li>
            <strong>Chroma:</strong> Open-source, easy local development
          </li>
          <li>
            <strong>FAISS:</strong> Facebook's library, fast but in-memory
          </li>
          <li>
            <strong>Weaviate:</strong> Open-source with GraphQL API
          </li>
          <li>
            <strong>Qdrant:</strong> Open-source with high performance
          </li>
          <li>
            <strong>Milvus:</strong> Open-source, cloud-native
          </li>
          <li>
            <strong>pgvector:</strong> PostgreSQL extension
          </li>
        </ul>

        <h2>LLM Providers</h2>
        <ul>
          <li>
            <strong>OpenAI:</strong> GPT-4, GPT-3.5-turbo
          </li>
          <li>
            <strong>Anthropic:</strong> Claude Sonnet 4, Claude Opus
          </li>
          <li>
            <strong>Groq:</strong> Ultra-fast inference
          </li>
          <li>
            <strong>Cohere:</strong> Specialized embeddings and generation
          </li>
          <li>
            <strong>Ollama:</strong> Run models locally
          </li>
        </ul>

        <h2>Embedding Models</h2>
        <ul>
          <li>
            <strong>OpenAI Embeddings:</strong> text-embedding-3-small/large
          </li>
          <li>
            <strong>Cohere Embed:</strong> Multilingual support
          </li>
          <li>
            <strong>HuggingFace:</strong> Open-source models (BGE, E5)
          </li>
          <li>
            <strong>Voyage AI:</strong> High-quality embeddings
          </li>
        </ul>

        <h2>Observability & Monitoring</h2>
        <ul>
          <li>
            <strong>LangSmith:</strong> Tracing, debugging, evaluation
          </li>
          <li>
            <strong>Weights & Biases:</strong> Experiment tracking
          </li>
          <li>
            <strong>Helicone:</strong> LLM observability
          </li>
          <li>
            <strong>Arize Phoenix:</strong> Open-source observability
          </li>
        </ul>

        <h2>MCP & Tool Integration</h2>
        <ul>
          <li>
            <strong>MCP Servers:</strong> Standardized tool protocol
          </li>
          <li>
            <strong>LangChain Tools:</strong> Pre-built tool integrations
          </li>
          <li>
            <strong>Function Calling:</strong> Native LLM tool use (OpenAI,
            Claude)
          </li>
        </ul>
      </MyAccordion>

      <MyAccordion title="Comparison: LangChain vs LangGraph">
        <h2>LangChain</h2>
        <h3>Best For:</h3>
        <ul>
          <li>Linear workflows (A → B → C)</li>
          <li>Simple RAG applications</li>
          <li>Quick prototypes</li>
          <li>Standard agent patterns</li>
        </ul>
        <h3>Pros:</h3>
        <ul>
          <li>✅ Easier learning curve</li>
          <li>✅ Pre-built components</li>
          <li>✅ Fast to get started</li>
          <li>✅ Good documentation</li>
        </ul>
        <h3>Cons:</h3>
        <ul>
          <li>❌ Less flexible for complex flows</li>
          <li>❌ Harder to add loops/branches</li>
          <li>❌ Limited control over execution</li>
        </ul>

        <h2>LangGraph</h2>
        <h3>Best For:</h3>
        <ul>
          <li>Complex conditional logic</li>
          <li>Multi-step workflows with loops</li>
          <li>Multi-agent systems</li>
          <li>Production applications needing control</li>
        </ul>
        <h3>Pros:</h3>
        <ul>
          <li>✅ Full control over workflow</li>
          <li>✅ Support for cycles and feedback</li>
          <li>✅ Better for complex agents</li>
          <li>✅ Explicit state management</li>
          <li>✅ Human-in-the-loop support</li>
        </ul>
        <h3>Cons:</h3>
        <ul>
          <li>❌ Steeper learning curve</li>
          <li>❌ More code to write</li>
          <li>❌ Can be overkill for simple tasks</li>
        </ul>

        <h2>Decision Framework</h2>
        <p>
          <strong>Choose LangChain if:</strong>
        </p>
        <ul>
          <li>Building simple Q&A or chat applications</li>
          <li>Need fast prototyping</li>
          <li>Workflow is mostly linear</li>
        </ul>
        <p>
          <strong>Choose LangGraph if:</strong>
        </p>
        <ul>
          <li>Need complex decision trees</li>
          <li>Require loops or retry logic</li>
          <li>Building production systems with multiple agents</li>
          <li>Need fine-grained control</li>
        </ul>
      </MyAccordion>

      <MyAccordion title="Best practices & considerations">
        <h2>Key Focus Areas for Production</h2>

        <h3>1. Latency Optimization</h3>
        <ul>
          <li>Use streaming for LLM responses</li>
          <li>Cache frequent queries</li>
          <li>Parallel tool calls when possible</li>
          <li>Use faster embedding models for retrieval</li>
          <li>Optimize chunk size (balance context vs. speed)</li>
        </ul>

        <h3>2. Cost Optimization</h3>
        <ul>
          <li>Use smaller models for simple tasks</li>
          <li>Implement prompt caching</li>
          <li>Limit context window size</li>
          <li>Use cheaper embedding models</li>
          <li>Monitor token usage per request</li>
        </ul>

        <h3>3. Retrieval Quality</h3>
        <ul>
          <li>Experiment with chunk size (256-1024 tokens)</li>
          <li>Use chunk overlap (10-20%)</li>
          <li>Test different numbers of retrieved results (k=3-10)</li>
          <li>Add metadata filtering</li>
          <li>Implement reranking for better results</li>
          <li>Hybrid search (vector + keyword)</li>
        </ul>

        <h3>4. Monitoring & Evaluation</h3>
        <ul>
          <li>Track agent decision paths</li>
          <li>Log all tool calls</li>
          <li>Monitor response quality</li>
          <li>Measure latency by component</li>
          <li>Set up alerts for failures</li>
          <li>A/B test different approaches</li>
        </ul>

        <h3>5. Security & Privacy</h3>
        <ul>
          <li>Sanitize user inputs</li>
          <li>Control which tools agents can access</li>
          <li>Implement rate limiting</li>
          <li>Audit data access patterns</li>
          <li>Use private embeddings for sensitive data</li>
        </ul>

        <h2>Common Pitfalls to Avoid</h2>
        <ul>
          <li>❌ Retrieving too much context (increases cost, latency)</li>
          <li>❌ Not testing with real user queries</li>
          <li>❌ Ignoring edge cases in agent loops</li>
          <li>❌ Poor error handling in tool calls</li>
          <li>❌ Not versioning prompts and configurations</li>
          <li>❌ Skipping observability from the start</li>
        </ul>
      </MyAccordion>

      <MyAccordion title="Team collaboration">
        <h2>Frontend Developers</h2>
        <h3>Your responsibilities:</h3>
        <ul>
          <li>Build chat/conversational UI with streaming support</li>
          <li>Display sources and citations from RAG</li>
          <li>Show agent thinking/progress indicators</li>
          <li>Handle loading states during retrieval</li>
          <li>Implement retry logic for failed requests</li>
        </ul>

        <h2>Backend Developers</h2>
        <h3>Your responsibilities:</h3>
        <ul>
          <li>Set up LangChain/LangGraph workflows</li>
          <li>Implement data indexing pipeline</li>
          <li>Configure vector database connections</li>
          <li>Build API endpoints for agent interactions</li>
          <li>Handle error cases and retries</li>
          <li>Set up monitoring and logging</li>
        </ul>

        <h2>Data Engineers</h2>
        <h3>Your collaboration:</h3>
        <ul>
          <li>Design data ingestion pipelines</li>
          <li>Manage vector database infrastructure</li>
          <li>Handle data updates and re-indexing</li>
          <li>Optimize chunking strategies</li>
          <li>Monitor storage costs</li>
        </ul>

        <h2>ML Engineers</h2>
        <h3>Your collaboration:</h3>
        <ul>
          <li>Select and fine-tune embedding models</li>
          <li>Evaluate retrieval quality metrics</li>
          <li>Optimize prompts for better agent performance</li>
          <li>A/B test different LLM providers</li>
          <li>Build evaluation datasets</li>
        </ul>

        <h2>DevOps / Platform Engineers</h2>
        <h3>Your collaboration:</h3>
        <ul>
          <li>Deploy vector databases</li>
          <li>Set up LLM API access and keys</li>
          <li>Configure auto-scaling for backends</li>
          <li>Implement monitoring dashboards</li>
          <li>Manage costs across providers</li>
        </ul>

        <h2>Product Managers</h2>
        <h3>Your collaboration:</h3>
        <ul>
          <li>Define success metrics for agent tasks</li>
          <li>Prioritize which workflows to automate</li>
          <li>Set latency and quality expectations</li>
          <li>Understand cost implications of features</li>
          <li>Plan for iterative improvements</li>
        </ul>
      </MyAccordion>

      <MyAccordion title="Summary">
        <h2>What Are These Technologies?</h2>
        <p>
          A modern AI stack combining LLMs with external knowledge (RAG),
          autonomous decision-making (Agents), and tool integration (MCP) to
          build intelligent applications that can reason, retrieve information,
          and take actions.
        </p>

        <h2>Why They Matter</h2>
        <ul>
          <li>🎯 Overcome LLM knowledge limitations</li>
          <li>📚 Access private and current information</li>
          <li>🤖 Enable autonomous multi-step task completion</li>
          <li>🔌 Standardize tool integrations</li>
          <li>✅ Ground responses in actual data (reduce hallucinations)</li>
        </ul>

        <h2>How It Works</h2>
        <ol>
          <li>
            <strong>Index your data:</strong> Embed documents → store in vector
            DB
          </li>
          <li>
            <strong>User asks question:</strong> Convert to vector → search for
            similar docs
          </li>
          <li>
            <strong>Retrieve context:</strong> Get top relevant chunks
          </li>
          <li>
            <strong>Generate response:</strong> LLM uses question + context
          </li>
          <li>
            <strong>Agent loop:</strong> Decide next action, use tools, repeat
            if needed
          </li>
        </ol>

        <h2>When to Use Each Component</h2>
        <p>
          <strong>Use RAG when:</strong>
        </p>
        <ul>
          <li>You need current or private information</li>
          <li>Building Q&A over documents</li>
          <li>Want to cite sources</li>
        </ul>
        <p>
          <strong>Use Agents when:</strong>
        </p>
        <ul>
          <li>Tasks require multiple steps</li>
          <li>Need to use external tools/APIs</li>
          <li>Want autonomous decision-making</li>
        </ul>
        <p>
          <strong>Use MCP when:</strong>
        </p>
        <ul>
          <li>Connecting to multiple tools</li>
          <li>Want standardized integrations</li>
          <li>Building extensible systems</li>
        </ul>

        <h2>Key Takeaways</h2>
        <ul>
          <li>
            <strong>Start with simple RAG</strong> before building complex
            agents
          </li>
          <li>
            <strong>Choose the right framework:</strong> LangChain for simple,
            LangGraph for complex
          </li>
          <li>
            <strong>Focus on retrieval quality:</strong> Experiment with
            chunking and retrieval strategies
          </li>
          <li>
            <strong>Monitor everything:</strong> Use LangSmith or similar from
            day one
          </li>
          <li>
            <strong>Optimize for production:</strong> Balance latency, cost, and
            quality
          </li>
          <li>
            <strong>Iterate based on real usage:</strong> Agent workflows
            improve with feedback
          </li>
        </ul>

        <h2>Getting Started</h2>
        <p>
          <strong>Beginner Path:</strong>
        </p>
        <ol>
          <li>Build a simple RAG Q&A system with LangChain</li>
          <li>Add a basic agent with 1-2 tools</li>
          <li>Implement observability with LangSmith</li>
        </ol>
        <p>
          <strong>Advanced Path:</strong>
        </p>
        <ol>
          <li>Design complex workflows with LangGraph</li>
          <li>Build multi-agent systems</li>
          <li>Integrate MCP servers for tool access</li>
          <li>Optimize for production at scale</li>
        </ol>
      </MyAccordion>
    </>
  );
}

export default App;
