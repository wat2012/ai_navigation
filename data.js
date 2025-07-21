const aiToolsData = {
  categories: [
    {
      id: "ai-assistants",
      icon: "🤖",
      title: "AI助手 / AI Assistants",
      tools: [
        {
          name: "ChatGPT",
          url: "https://chat.openai.com",
          company: "OpenAI",
          favicon: "https://chat.openai.com/favicon.ico",
          description: "GPT-4o模型，支持实时语音对话和图像分析",
          descriptionEn: "GPT-4o model with real-time voice chat and image analysis",
          details: "最新GPT-4o模型，支持多模态交互，实时语音对话，代码执行功能",
          detailsEn: "Latest GPT-4o model with multimodal interaction, real-time voice chat, and code execution"
        },
        {
          name: "Claude",
          url: "https://claude.ai",
          company: "Anthropic",
          favicon: "https://claude.ai/favicon.ico",
          description: "Claude 3.5 Sonnet，200K上下文，擅长分析推理",
          descriptionEn: "Claude 3.5 Sonnet with 200K context, excels at analysis and reasoning",
          details: "Claude 3.5系列，超长文本处理能力，安全性和精确性业界领先",
          detailsEn: "Claude 3.5 series with ultra-long text processing, industry-leading safety and accuracy"
        },
        {
          name: "Gemini",
          url: "https://gemini.google.com",
          company: "Google",
          favicon: "https://gemini.google.com/favicon.ico",
          description: "Gemini 1.5 Pro，100万token上下文，深度集成Google服务",
          descriptionEn: "Gemini 1.5 Pro with 1M token context, deeply integrated with Google services",
          details: "Google最新大模型，与搜索、Gmail、Drive等服务深度集成",
          detailsEn: "Google's latest large model, deeply integrated with Search, Gmail, Drive and more"
        },
        {
          name: "Microsoft Copilot",
          url: "https://copilot.microsoft.com",
          company: "Microsoft",
          favicon: "https://copilot.microsoft.com/favicon.ico",
          description: "集成Office 365，工作效率AI助手",
          descriptionEn: "Integrated with Office 365, productivity AI assistant",
          details: "深度集成Microsoft生态，支持Word、Excel、PowerPoint等办公应用",
          detailsEn: "Deeply integrated with Microsoft ecosystem, supports Word, Excel, PowerPoint and more"
        },
        {
          name: "DeepSeek",
          url: "https://www.deepseek.com",
          company: "深度求索 DeepSeek",
          favicon: "https://www.deepseek.com/favicon.ico",
          description: "DeepSeek-V3模型，免费强大的中文AI",
          descriptionEn: "DeepSeek-V3 model, free and powerful Chinese AI",
          details: "最新V3模型，在中文理解和推理能力上表现优异",
          detailsEn: "Latest V3 model with excellent performance in Chinese understanding and reasoning"
        },
        {
          name: "文心一言",
          url: "https://yiyan.baidu.com",
          company: "百度 Baidu",
          favicon: "https://yiyan.baidu.com/favicon.ico",
          description: "文心一言4.0，百度自研大语言模型",
          descriptionEn: "ERNIE Bot 4.0, Baidu's self-developed large language model",
          details: "2025年升级版本，支持多模态交互，深度集成百度生态",
          detailsEn: "2025 upgraded version with multimodal interaction, deeply integrated with Baidu ecosystem"
        },
        {
          name: "通义千问",
          url: "https://tongyi.aliyun.com",
          company: "阿里巴巴 Alibaba",
          favicon: "https://tongyi.aliyun.com/favicon.ico",
          description: "通义千问3.0，阿里云大模型平台",
          descriptionEn: "Tongyi Qianwen 3.0, Alibaba Cloud's large model platform",
          details: "2025年最新版本，企业级应用，支持API调用和定制化训练",
          detailsEn: "2025 latest version for enterprise applications with API access and custom training"
        },
        {
          name: "豆包",
          url: "https://www.doubao.com",
          company: "字节跳动 ByteDance",
          favicon: "https://www.doubao.com/favicon.ico",
          description: "豆包AI助手，支持文档分析和创作",
          descriptionEn: "Doubao AI assistant with document analysis and creative writing",
          details: "字节跳动AI助手，2025年推出，专注于内容创作和智能问答",
          detailsEn: "ByteDance's AI assistant launched in 2025, focused on content creation and intelligent Q&A"
        },
        {
          name: "Kimi",
          url: "https://kimi.moonshot.cn",
          company: "月之暗面 Moonshot AI",
          favicon: "https://kimi.moonshot.cn/favicon.ico",
          description: "Kimi智能助手，超长文本处理专家",
          descriptionEn: "Kimi intelligent assistant, expert in ultra-long text processing",
          details: "支持200万字超长文本，擅长文档分析、翻译和总结",
          detailsEn: "Supports 2M character ultra-long text, excels at document analysis, translation and summarization"
        }
      ]
    },
    {
      id: "image-generators",
      icon: "🎨",
      title: "AI图像生成器 / AI Image Generators",
      tools: [
        {
          name: "Midjourney",
          url: "https://www.midjourney.com",
          company: "Midjourney",
          favicon: "https://www.midjourney.com/favicon.ico",
          description: "V6模型，超高质量艺术图像生成",
          descriptionEn: "V6 model with ultra-high quality artistic image generation",
          details: "最新V6模型，生成质量显著提升，支持更精确的提示词理解",
          detailsEn: "Latest V6 model with significantly improved generation quality and more precise prompt understanding"
        },
        {
          name: "DALL-E 3",
          url: "https://openai.com/dall-e-3",
          company: "OpenAI",
          favicon: "https://openai.com/favicon.ico",
          description: "在ChatGPT中直接生成图像，支持图像编辑",
          descriptionEn: "Generate images directly in ChatGPT with image editing support",
          details: "集成在ChatGPT中，支持图像生成和编辑，理解复杂提示词",
          detailsEn: "Integrated in ChatGPT, supports image generation and editing with complex prompt understanding"
        },
        {
          name: "Flux.1",
          url: "https://blackforestlabs.ai",
          company: "Black Forest Labs",
          favicon: "https://blackforestlabs.ai/favicon.ico",
          description: "Flux.1模型，开源高质量图像生成",
          descriptionEn: "Flux.1 model, open-source high-quality image generation",
          details: "2025年热门开源图像生成模型，支持多种风格和高分辨率输出",
          detailsEn: "Popular open-source image generation model in 2025, supports various styles and high-resolution output"
        },
        {
          name: "Stable Diffusion 3",
          url: "https://stability.ai",
          company: "Stability AI",
          favicon: "https://stability.ai/favicon.ico",
          description: "SD3模型，更强的文本理解和图像质量",
          descriptionEn: "SD3 model with enhanced text understanding and image quality",
          details: "2025年发布的Stable Diffusion 3.0，显著提升文本理解和图像一致性",
          detailsEn: "Stable Diffusion 3.0 released in 2025 with significantly improved text understanding and image consistency"
        },
        {
          name: "文心一格",
          url: "https://yige.baidu.com",
          company: "百度 Baidu",
          favicon: "https://yige.baidu.com/favicon.ico",
          description: "百度AI艺术和创意图像生成平台",
          descriptionEn: "Baidu's AI art and creative image generation platform",
          details: "支持中文提示词，专为中文用户优化的图像生成工具",
          detailsEn: "Supports Chinese prompts, image generation tool optimized for Chinese users"
        },
        {
          name: "通义万相",
          url: "https://tongyi.aliyun.com/wanxiang",
          company: "阿里巴巴 Alibaba",
          favicon: "https://tongyi.aliyun.com/favicon.ico",
          description: "阿里云图像生成服务，企业级应用",
          descriptionEn: "Alibaba Cloud image generation service for enterprise applications",
          details: "面向企业的图像生成解决方案，支持API集成和批量处理",
          detailsEn: "Enterprise-focused image generation solution with API integration and batch processing"
        }
      ]
    },
    {
      id: "video-generators",
      icon: "🎬",
      title: "AI视频生成器 / AI Video Generators",
      tools: [
        {
          name: "Sora",
          url: "https://openai.com/sora",
          company: "OpenAI",
          favicon: "https://openai.com/favicon.ico",
          description: "革命性文生视频模型，最长生成60秒视频",
          descriptionEn: "Revolutionary text-to-video model, generates up to 60-second videos",
          details: "OpenAI最新视频生成模型，支持高质量长视频生成",
          detailsEn: "OpenAI's latest video generation model supporting high-quality long video generation"
        },
        {
          name: "Runway",
          url: "https://www.runwayml.com",
          company: "Runway",
          favicon: "https://www.runwayml.com/favicon.ico",
          description: "Gen-3 Alpha模型，专业级视频编辑工具",
          descriptionEn: "Gen-3 Alpha model, professional video editing tools",
          details: "最新Gen-3模型，提供文本到视频、图像扩展等多种功能",
          detailsEn: "Latest Gen-3 model offering text-to-video, image extension and various features"
        },
        {
          name: "Pika Labs",
          url: "https://pika.art",
          company: "Pika Labs",
          favicon: "https://pika.art/favicon.ico",
          description: "Pika 1.5，AI视频生成和编辑平台",
          descriptionEn: "Pika 1.5, AI video generation and editing platform",
          details: "2025年升级版本，支持更长视频生成和实时编辑功能",
          detailsEn: "2025 upgraded version supporting longer video generation and real-time editing features"
        },
        {
          name: "Luma Dream Machine",
          url: "https://lumalabs.ai",
          company: "Luma AI",
          favicon: "https://lumalabs.ai/favicon.ico",
          description: "Dream Machine，高质量文本生成视频",
          descriptionEn: "Dream Machine, high-quality text-to-video generation",
          details: "专注于高质量视频生成，支持复杂场景和动作理解",
          detailsEn: "Focused on high-quality video generation with complex scene and motion understanding"
        },
        {
          name: "HeyGen",
          url: "https://www.heygen.com",
          company: "HeyGen",
          favicon: "https://www.heygen.com/favicon.ico",
          description: "AI数字人视频生成平台",
          descriptionEn: "AI digital human video generation platform",
          details: "2025年快速发展的数字人视频工具，支持多语言和自定义形象",
          detailsEn: "Rapidly growing digital human video tool in 2025, supports multiple languages and custom avatars"
        },
        {
          name: "可灵AI",
          url: "https://kling.kuaishou.com",
          company: "快手 Kuaishou",
          favicon: "https://kling.kuaishou.com/favicon.ico",
          description: "可灵视频生成模型，中文优化",
          descriptionEn: "Kling video generation model, optimized for Chinese",
          details: "快手推出的视频生成AI，专为中文用户和内容创作者设计",
          detailsEn: "Video generation AI by Kuaishou, designed for Chinese users and content creators"
        }
      ]
    },
    {
      id: "code-assistants",
      icon: "💻",
      title: "AI编程助手 / AI Code Assistants",
      tools: [
        {
          name: "GitHub Copilot",
          url: "https://github.com/features/copilot",
          company: "GitHub",
          favicon: "https://github.com/favicon.ico",
          description: "GitHub Copilot，AI编程助手",
          descriptionEn: "GitHub Copilot, AI programming assistant",
          details: "集成在IDE中的智能代码补全和生成工具，支持多种编程语言",
          detailsEn: "Intelligent code completion and generation tool integrated in IDEs, supports multiple programming languages"
        },
        {
          name: "Cursor",
          url: "https://cursor.sh",
          company: "Anysphere",
          favicon: "https://cursor.sh/favicon.ico",
          description: "Cursor，AI代码编辑器",
          descriptionEn: "Cursor, AI-powered code editor",
          details: "2025年热门的AI原生代码编辑器，基于GPT-4优化编程体验",
          detailsEn: "Popular AI-native code editor in 2025, optimized programming experience based on GPT-4"
        },
        {
          name: "Replit",
          url: "https://replit.com",
          company: "Replit",
          favicon: "https://replit.com/favicon.ico",
          description: "Replit AI，在线编程和AI助手",
          descriptionEn: "Replit AI, online programming with AI assistant",
          details: "集成AI的在线开发环境，支持多种语言和实时协作",
          detailsEn: "AI-integrated online development environment supporting multiple languages and real-time collaboration"
        },
        {
          name: "Codeium",
          url: "https://codeium.com",
          company: "Codeium",
          favicon: "https://codeium.com/favicon.ico",
          description: "Codeium，免费AI编程助手",
          descriptionEn: "Codeium, free AI programming assistant",
          details: "免费的AI编程工具，支持70+编程语言和主流IDE",
          detailsEn: "Free AI programming tool supporting 70+ programming languages and mainstream IDEs"
        }
      ]
    },
    {
      id: "audio-tools",
      icon: "🎵",
      title: "AI音频工具 / AI Audio Tools",
      tools: [
        {
          name: "ElevenLabs",
          url: "https://elevenlabs.io",
          company: "ElevenLabs",
          favicon: "https://elevenlabs.io/favicon.ico",
          description: "AI语音合成和克隆，支持多语言",
          descriptionEn: "AI voice synthesis and cloning, supports multiple languages",
          details: "2025年领先的AI语音技术，支持情感表达和语音克隆",
          detailsEn: "Leading AI voice technology in 2025 with emotion expression and voice cloning"
        },
        {
          name: "Mubert",
          url: "https://mubert.com",
          company: "Mubert",
          favicon: "https://mubert.com/favicon.ico",
          description: "AI音乐生成平台",
          descriptionEn: "AI music generation platform",
          details: "实时生成背景音乐，适用于视频、播客和应用",
          detailsEn: "Real-time background music generation for videos, podcasts and apps"
        },
        {
          name: "Suno",
          url: "https://suno.ai",
          company: "Suno",
          favicon: "https://suno.ai/favicon.ico",
          description: "Suno AI音乐创作，文本生成音乐",
          descriptionEn: "Suno AI music creation, text-to-music generation",
          details: "2025年热门的AI音乐生成工具，支持歌词和旋律创作",
          detailsEn: "Popular AI music generation tool in 2025, supports lyrics and melody creation"
        }
      ]
    },
    {
      id: "productivity-tools",
      icon: "⚡",
      title: "AI效率工具 / AI Productivity Tools",
      tools: [
        {
          name: "Notion AI",
          url: "https://notion.so",
          company: "Notion",
          favicon: "https://notion.so/favicon.ico",
          description: "Notion AI，智能笔记和文档助手",
          descriptionEn: "Notion AI, intelligent note-taking and document assistant",
          details: "集成在Notion中的AI功能，支持内容生成、总结和翻译",
          detailsEn: "AI features integrated in Notion, supports content generation, summarization and translation"
        },
        {
          name: "Grammarly",
          url: "https://grammarly.com",
          company: "Grammarly",
          favicon: "https://grammarly.com/favicon.ico",
          description: "Grammarly AI，智能写作助手",
          descriptionEn: "Grammarly AI, intelligent writing assistant",
          details: "2025年增强版本，支持语法检查、风格优化和内容生成",
          detailsEn: "2025 enhanced version with grammar checking, style optimization and content generation"
        },
        {
          name: "Gamma",
          url: "https://gamma.app",
          company: "Gamma",
          favicon: "https://gamma.app/favicon.ico",
          description: "Gamma AI演示文稿生成器",
          descriptionEn: "Gamma AI presentation generator",
          details: "AI驱动的演示文稿和文档创建工具，自动设计和排版",
          detailsEn: "AI-powered presentation and document creation tool with automatic design and layout"
        }
      ]
    },
    {
      id: "ai-healthcare",
      icon: "🩺",
      title: "AI医疗健康 / AI Healthcare",
      tools: [
        {
          name: "FDA INTACT",
          url: "https://www.fda.gov/ai-intact",
          company: "FDA",
          favicon: "https://www.fda.gov/favicon.ico",
          description: "全球医疗AI工具，提升诊断和监管效率",
          descriptionEn: "Global medical AI tool for improved diagnosis and regulatory efficiency",
          details: "2025年FDA上线INTACT，优化医疗设备审批和数据分析，推动AI医疗应用",
          detailsEn: "FDA launched INTACT in 2025 to optimize medical device approval and data analysis, driving AI healthcare adoption"
        },
        {
          name: "Crescendo Brain-Computer",
          url: "https://crescendo.ai/brain-computer",
          company: "Crescendo AI",
          favicon: "https://crescendo.ai/favicon.ico",
          description: "脑机接口AI，将思维转为文字或语音",
          descriptionEn: "Brain-computer interface AI, converts thoughts to text or speech",
          details: "2025年突破，助力瘫痪患者表达，医疗辅助新纪元",
          detailsEn: "2025 breakthrough, helps paralyzed patients communicate, new era for medical assistance"
        }
      ]
    },
    {
      id: "ai-education",
      icon: "📚",
      title: "AI教育 / AI Education",
      tools: [
        {
          name: "NVIDIA AI School",
          url: "https://www.nvidia.com/education/ai",
          company: "NVIDIA",
          favicon: "https://www.nvidia.com/favicon.ico",
          description: "K-12阶段AI课程与教师培训",
          descriptionEn: "K-12 AI curriculum and teacher training",
          details: "与密西西比州合作，推动AI基础教育，培养AI时代人才",
          detailsEn: "Cooperation with Mississippi to promote AI education and talent for the AI era"
        },
        {
          name: "AI Tutor Platform",
          url: "https://crescendo.ai/edu-tutor",
          company: "Crescendo AI",
          favicon: "https://crescendo.ai/favicon.ico",
          description: "AI辅导与内容生成，交互式学习平台",
          descriptionEn: "AI tutoring and content generation, interactive learning platform",
          details: "支持与AI模拟历史人物对话，提升学习趣味性和个性化",
          detailsEn: "Supports dialogue with AI-simulated historical figures, enhances learning engagement and personalization"
        }
      ]
    },
    {
      id: "ai-platforms",
      icon: "🛠️",
      title: "AI平台 / AI Platforms",
      tools: [
        {
          name: "Meta LLaMA 3",
          url: "https://ai.meta.com/llama",
          company: "Meta",
          favicon: "https://ai.meta.com/favicon.ico",
          description: "开源大模型，性能强劲，开发者友好",
          descriptionEn: "Open-source large model, high performance, developer-friendly",
          details: "LLaMA 3推动开源AI生态，2025年性能与成本大幅提升",
          detailsEn: "LLaMA 3 drives open-source AI ecosystem, major performance and cost improvements in 2025"
        },
        {
          name: "Google Vertex AI",
          url: "https://cloud.google.com/vertex-ai",
          company: "Google",
          favicon: "https://cloud.google.com/favicon.ico",
          description: "企业级AI平台，支持多模态模型和快速创新",
          descriptionEn: "Enterprise AI platform, supports multimodal models and rapid innovation",
          details: "2025年主流企业AI平台，适合ML工程师和开发者",
          detailsEn: "Mainstream enterprise AI platform in 2025, suitable for ML engineers and developers"
        },
        {
          name: "Microsoft Azure AI",
          url: "https://azure.microsoft.com/en-us/products/ai-services/",
          company: "Microsoft",
          favicon: "https://azure.microsoft.com/favicon.ico",
          description: "多模态AI平台，支持快速部署和创新",
          descriptionEn: "Multimodal AI platform, supports rapid deployment and innovation",
          details: "2025年Azure集成最新开源与专用模型，企业应用广泛",
          detailsEn: "Azure integrates latest open-source and proprietary models, widely used in enterprises in 2025"
        },
        {
          name: "H2O.ai",
          url: "https://h2o.ai",
          company: "H2O.ai",
          favicon: "https://h2o.ai/favicon.ico",
          description: "自动化机器学习平台，支持多行业应用",
          descriptionEn: "Automated machine learning platform, supports multi-industry applications",
          details: "2025年主流AutoML平台，医疗、金融、制造等领域广泛应用",
          detailsEn: "Mainstream AutoML platform in 2025, widely used in healthcare, finance, manufacturing, etc."
        },
        {
          name: "IBM watsonx.ai",
          url: "https://www.ibm.com/watsonx",
          company: "IBM",
          favicon: "https://www.ibm.com/favicon.ico",
          description: "企业级AI平台，支持定制化和安全合规",
          descriptionEn: "Enterprise AI platform, supports customization and compliance",
          details: "2025年IBM推出watsonx.ai，专注企业AI安全与合规",
          detailsEn: "IBM launched watsonx.ai in 2025, focused on enterprise AI security and compliance"
        }
      ]
    },
    {
      id: "ai-content-generation",
      icon: "📝",
      title: "AI内容生成 / AI Content Generation",
      tools: [
        {
          name: "Eden AI",
          url: "https://edenai.co",
          company: "Eden AI",
          favicon: "https://edenai.co/favicon.ico",
          description: "一站式AI集成平台，多个模型接口",
          descriptionEn: "All-in-one AI integration platform, multiple model APIs",
          details: "2025年热门平台，支持多种AI模型和内容生成API",
          detailsEn: "Popular platform in 2025, supports various AI models and content generation APIs"
        },
        {
          name: "PolyBuzz",
          url: "https://polybuzz.ai",
          company: "PolyBuzz",
          favicon: "https://polybuzz.ai/favicon.ico",
          description: "AI驱动内容生成与营销平台",
          descriptionEn: "AI-powered content generation and marketing platform",
          details: "2025年新兴平台，助力企业内容创作与自动化营销",
          detailsEn: "Emerging platform in 2025, helps enterprise content creation and automated marketing"
        },
        {
          name: "SERRAT.AI",
          url: "https://serrat.ai",
          company: "SERRAT.AI",
          favicon: "https://serrat.ai/favicon.ico",
          description: "创作者AI内容生成与辅助工具",
          descriptionEn: "AI content generation and assistant tool for creators",
          details: "2025年面向创作者的AI工具，提升内容创作效率",
          detailsEn: "AI tool for creators in 2025, improves content creation efficiency"
        }
      ]
    }  ],
  stats: {
    totalTools: "120+",
    categories: "21",
    lastUpdated: "7月10日",
    lastUpdatedEn: "July 10"
  }
};
