<template>
  <div class="swoperCont_days">
    <div class="tab">
      <div class="tab-item tab-item1" @click="dayActive = 'day1'" :class="dayActive == 'day1' ? 'active' : ''">
      <div class="daybg">Day1</div>
    </div>
      <div class="tab-item tab-item2" @click="dayActive = 'day2'" :class="dayActive == 'day2' ? 'active' : ''">
        <div class="daybg">Day2</div>
      </div>
      <div class="tab-item tab-item3" @click="dayActive = 'day3'" :class="dayActive == 'day3' ? 'active' : ''">
        <div class="daybg">Day3</div>
      </div>
    </div>
    <div v-if="dayActive == 'day1'" class="ss-content">
      <div class="time-list">
        <img src="../assets/images/ico_shijian.png" alt="">
        May 29, 2024
      </div>
      <!-- <div class="img">
        <img src="../assets/images/day1.png" alt="" />
        <div class="info">
          <div>
            <div class="title">Day1</div>
            <div class="date d1">May 29, 2024</div>
          </div>
        </div>
      </div> -->
      <div class="inner_ss-content">
        <div class="ss-content_item" v-for="item in OutlineList" :key="item">
        <!--
        <div class="ss-content_item" data-aos="fade-up" v-for="item in OutlineList" :key="item">
        -->
          <img class="flagBg" src="../assets/images/ico_yuan.svg" alt="" />
          <div class="title">{{ item.title }}</div>
          <div class="detail" v-html="item.content"></div>
        </div>
      </div>
    </div>
    <div v-if="dayActive == 'day2'" class="ss-content">
      <div class="time-list">
        <img src="../assets/images/ico_shijian.png" alt="">
        May 30, 2024
      </div>
      <!-- <div class="img">
        <img src="../assets/images/day2.png" alt="" />
        <div class="info">
          <div>
            <div class="title">Day2</div>
            <div class="date d2">May 30, 2024</div>
          </div>
        </div>
      </div> -->
      <div class="inner_ss-content">
        <div class="ss-content_item" v-for="item in OutlineList2" :key="item">
        <!--<div class="ss-content_item" data-aos="fade-up" v-for="item in OutlineList2" :key="item">
        -->
          <img class="flagBg" src="../assets/images/ico_yuan.svg" alt="" />
          <div class="title">{{ item.title }}</div>
          <div class="detail" v-html="item.content"></div>
        </div>
      </div>
    </div>
    <div v-if="dayActive == 'day3'" class="ss-content">
      <!-- <div class="img">
        <img src="../assets/images/day3.png" alt="" />
        <div class="info">
          <div>
            <div class="title">Day3</div>
            <div class="date d3">May 31, 2024</div>
          </div>
        </div>
      </div> -->
      <div class="time-list">
          <img src="../assets/images/ico_shijian.png" alt="">
          May 31, 2024
        </div>
      <div class="inner_ss-content">
        <div class="ss-content_item" v-for="item in OutlineList3" :key="item">
        <!--<div class="ss-content_item" data-aos="fade-up" v-for="item in OutlineList3" :key="item">
        -->
          <img class="flagBg" src="../assets/images/ico_yuan.svg" alt="" />
          <div class="title">{{ item.title }}</div>
          <div class="detail" v-html="item.content"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { ref, computed, watch, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "",
  setup() {
    const store = useStore();
    //适配
    const screenWidth = computed(() => {
      return store.state.screenWidth;
    });
    const pageSize = ref(3);
    const slidesToShow = ref(2.5);
    if (screenWidth.value < 800) {
      slidesToShow.value = 1.2;
    }
    onMounted(() => {
      
    });
    const OutlineList = ref([

      {
        title: "GPT Stage (Palace Of Fine Arts)",
        content: `
          1. Keynote 09:00 - 10:00: The Future of Foundation Models
            <br/><br/><br/>
          2. Keynote 10:00-10:45: Enterprise AI Search & Knowledge Discovery
            <br/><br/>&nbsp&nbsp
            - (Amazon)
            <br/><br/><br/>
          3. Keynote 10:45-11:45: What's Next Big Moment in Generative AI?
            <br/><br/>&nbsp&nbsp
            - (Rodrigo Liang, Co-Founder & CEO @SambaNova)
            <br/><br/><br/>
          4. Panel Discussion 13:00-13:45: Key Challenges for Providing GenAI Services On Scalable Cloud Infrastructure
            <br/><br/>&nbsp&nbsp
            - (Yashar Behzadi, CEO & Founder @Synthesis AI, Moderator) | (Jia Yangqing, @Lepton.AI) | (Ameer Haj-Ali, Ex Founding Eng @Anyscale) | (Tuhin Srivastava, CEO @Baseten) | (Dr. Josh Tobin, Co-Founder & CEO @Gantry)
            <br/><br/><br/>
          5. Keynote 13:45-14:30: Vector Database built for enterprise-grade AI applications
            <br/><br/>&nbsp&nbsp
            - (Charles Xie, CEO @Zilliz)
            <br/><br/><br/>
          6. Panel Discussion 14:30-15:15: The Power of Data in the Era of GenAI
            <br/><br/>&nbsp&nbsp
            - (Amazon) | (Ajinkya Malasane, Sr. Director, Product Strategy & Marketing @TELUS International) | (Zuora) | (Shir Chorev, Co-Founder & CTO @Deepchecks)
            <br/><br/><br/>
          7. Panel Discussion 15:15-16:00: Robotics and GenAI
            <br/><br/>&nbsp&nbsp
            - (Devendra Chaplot, AI Research Scientist @Mistral AI, Moderator) | (Jim Fan, Research Manager & Lead of Embodied AI @NVIDIA) | (Tony Zhao, Author @ALOHA) | (Zipeng Fu, Author @ALOHA) | (Cheng Chi, CS PhD @Stanford University)
            <br/><br/><br/>
          8. Panel Discussion 16:00-16:45: AI Computing / AI HW - Corporate VC investment strategy & focus
            <br/><br/>&nbsp&nbsp
            - (Xuhui Shao, MD @Foothill Ventures, Moderator) | (Jeff Hennig, Vice President, Corporate Development @AMD Venture) | (Tushar Gupta, Sr. Director @Qualcomm Venture)
            <br/><br/><br/>
        `,
      },
      {
        title: "AGI Stage (Palace Of Fine Arts Theatre)",
        content: `
          1. Keynote 09:00-09:45: Advancements in Embodied AI: Key Technologies, Applications, and Future Trends
            <br/><br/>&nbsp&nbsp
            - (Jim Fan, Research Manager & Lead of Embodied AI @NVIDIA)
            <br/><br/><br/>
          2. Keynote 09:45-10:30: Transforming Business Processes with LLM: Opportunities and Challenges
            <br/><br/><br/>
          3. Keynote 13:00-13:45: Optimizing Enterprise Systems through Integration of LLM
            <br/><br/>&nbsp&nbsp 
            - (Arvind Jain, CEO @Glean)
            <br/><br/><br/>
          4. Panel Discussion 13:45-14:30: Conversational AI in Sales and Marketing
            <br/><br/>&nbsp&nbsp 
            - (Siqi Lin, Head of Growth @Cresta.ai, Moderator) | (Jim Palmer, Chief AI Officer @Dialpad) | (Yaniv Makover, CEO @Anyword) | (Prof. Chen Xi, Professor @NYU) | (Prof. Andreas Ramos, Advisor@ArcticEider.ai)
            <br/><br/><br/>
          5. Panel Discussion 14:30-15:15: How AI Is Reshaping the Service in Medicine and Healthcare
            <br/><br/>&nbsp&nbsp 
            - (Andy Huai-Ping Chen, Expert @Primary Venture Partners, Moderator) | (Dr. Yao Du, Clinical Assistant Professor @Keck School of Medicine, Moderator) | (Prof. Jennifer Listgarten, Professor @UC Berkeley, Moderator) | (Zachary Lipton, CTO @Abridge), (Ankit Jain, CEO @Infinitus) | (Nikunj Bajaj, Co-Founder & CEO, @TrueFoundry)
            <br/><br/><br/>
          6. Panel Discussion 15:15-16:15: A Deep Dive into the State-of-the-Art LLMs
            <br/><br/>&nbsp&nbsp
            - (Minfa Wang, Senior Machine Learning Engineer @Waymo, Moderator) | (Devendra Chaplot, AI Research Scientist @Mistral AI) | (Sharan Narang, Co-Author @Llama 3 & Llama 2) | (Tony Wu, Co-Founder @xAI)
            <br/><br/><br/>
          7. Panel Discussion 16:15-17:00: Innovating Infrastructure for LLM
            <br/><br/>&nbsp&nbsp 
            - (Monica Zou, CMO @Dekube.ai) | (OneSource Cloud)
            <br/><br/><br/>
        `,
      },
      {
        title: "Align Stage",
        content: `
          1. Panel Discussion 09:00-10:00: VC
            <br/><br/>&nbsp&nbsp 
            - (Kelvin Mu, Principal @Translink Capital, Moderator)
            <br/><br/><br/>
          2. Panel Discussion 10:00-11:00: Data Synthesis
            <br/><br/><br/>
          3. Panel Discussion 11:00-12:00: Computing Resource for LLM 
            <br/><br/>&nbsp&nbsp 
            - (Nikunj Bajaj, Co-Founder & CEO @TrueFoundry)
            <br/><br/><br/>
          4. Panel Discussion 13:00-13:45: Revolutionizing Healthcare with Generative AI in
            <br/><br/>&nbsp&nbsp 
            - (Capsico Health)
            <br/><br/><br/>
          5. Keynote 14:30-15:15: Navigating the AI Changing Landscape
            <br/><br/>&nbsp&nbsp 
            - (Jeremiah Owyang, Venture Capital Investor @Blitzscaling Ventures)
            <br/><br/><br/>
        `,
      },
      {
        title: "Breakout Room 6",
        content: `
          1. Workshop 09:00-11:00: Build an advanced Retrieval Augmented Generation (RAG) assistant with Amazon Bedrock
            <br/><br/>&nbsp&nbsp
            - (Vidya Sagar, Applied Science Manager @AWS AI)
            <br/><br/><br/>
          2. Workshop 13:00-15:00: <i>Will be provided by Speaker soon</i>
            <br/><br/>&nbsp&nbsp
            - (SambaNova)
            <br/><br/><br/>
          3. Workshop 15:00-17:00: <i>Will be provided by Speaker soon</i>
            <br/><br/>&nbsp&nbsp
            - (IBM)
            <br/><br/><br/>
        `,
      },
      {
        title: "Breakout Room 7",
        content: `
          1. Workshop 10:00-11:00: Pitching Your Startup: The Brutal Truth About What VCs Want in AI-First Companies
            <br/><br/>&nbsp&nbsp
            - (Jay Zhao, Managing Partner @Leonis Capital) | (Jenny Xiao, Partner @Leonis Capitala) | (Chris McCann, General Partner @Race Capital) | (Barr Yaron, Principal @Amplify Partners)
            <br/><br/><br/>
          2. Workshop 14:00-15:00: Harnessing LLM for Predictive Analysis in Cryptocurrency Investments
            <br/><br/>&nbsp&nbsp
            - (Mengfan Zhang, @MountainLion)
            <br/><br/><br/>
          3. Keynote 16:00-16:30: Proof of Learning for Decentralized AI
            <br/><br/>&nbsp&nbsp
            - (Prof. Chen Xi, Professor @NYU)
            <br/><br/><br/>
        `,
      },
    ]);

    const OutlineList2 = ref([
      {
        title: "GPT Stage (Palace Of Fine Arts)",
        content: `
          1. Keynote 09:00-09:45: The Role of Generative AI in Advancing Industrial Automation and Smart Manufacturing
            <br/><br/>&nbsp&nbsp
            - (Rashmi Misra, Chief AI Officer @Analog Device)
            <br/><br/><br/>
          2. Fireside Chat 09:45-10:30: Unlocks the Power of Knowledge with information discovery and sharing
            <br/><br/>&nbsp&nbsp
            - (Denis Yarats, CTO @Perplexity.AI)
            <br/><br/><br/>
          3. Keynote 10:30-11:15: How To Shape the Future of Enterprise using GenAI
            <br/><br/>&nbsp&nbsp
            - (Armand Ruiz, VP of Product - AI Platform @IBM)
            <br/><br/><br/>
          4. Fireside Chat 11:15-12:00: <i>Will be provided by Speaker soon</i>
            <br/><br/>&nbsp&nbsp 
            - (Nathan Lile, CEO Synth Labs, Moderator) | (Dr. Michael Stewart, Managing Partner @M12)
            <br/><br/><br/>
          5. Panel Discussion 13:00-13:45: Harnessing the Power of LLM for Super Agents: Capabilities, Challenges, and Future Prospects 
            <br/><br/>&nbsp&nbsp 
            - (Yohei Nakajima, Founder @BabyAGI, Moderator) | (Jiang Chen, Head of Ecosystem & AI Platform @Zilliz) | (Davit Baghdasaryan, CEO @Krisp) | (Curtis Northcutt, CEO @CleanLab) | (Lance Martin, Software / ML @Langchain)
            <br/><br/><br/>
          6. Panel Discussion 13:45-14:30: LLM Alignment: Ensuring Ethical and Safe of LLM
            <br/><br/>&nbsp&nbsp
            - (Lance Martin, Software / ML @Langchain, Moderator) | (Chunting Zhou, Senior Research Scientist @Meta AI) | (Yohei Nakajima, Founder @BabyAGI) | (Shishir Patil, Creater @Gorilla LLM) | (Soumya Batra, Co-Author @LLAMA2)
            <br/><br/><br/>
          7. Panel Discussion 14:30-15:15: Identifying Unicorns: How can VCs spot the next big thing in GenAI?
            <br/><br/>&nbsp&nbsp 
            - (Matthew Stepka, Founder & Managing Partner @Machina Ventures, Moderator) | (Jingsheng Huang, Director of Board @Yiren Digital), (Obvious Ventures) | (Ed Roman, Managing Partner @Hack VC) | (Nan Zhou, Director @Qualcomm Ventures) 
            <br/><br/><br/>
          8. Panel Discussion 15:15-16:00: How does LLM Helps to Preserve Minority Culture
            <br/><br/>&nbsp&nbsp 
            - (Artur Kiulian, Founder @Radical Philanthropies, Moderator) | (Dinesh Maheshwari, Humanist Entrepreneur, Startup Advisor, Chief Technology Advisor @Groq) | (Bryan McCann, CTO & Co-Founder @You.com) | (Stan Lee, CTO & Co-Founder @Upstage) | (Devendra Chaplot, AI Research Scientist @Mistral AI)
            <br/><br/><br/>
          9. Panel Discussion 16:00-16:45: Building a Brain for the Copilot: How Infrastructure Enables Powerful GenAI Assistants
            <br/><br/>&nbsp&nbsp 
            - (Bhavin Shah, CEO & Founder @Moveworks, Moderator) | (Dmytro Dzhulgakov, Co-Founder & CTO @Fireworks.ai) | (Eddie Aftandilian, Principal Researcher @GitHub) | (Ram Sriharsha, CTO @Pinecone))
            <br/><br/><br/>
        `,
      },
      {
        title: "AGI Stage (Palace Of Fine Arts Theatre)",
        content: `
          1. Keynote 09:00-09:45: <i>Will be provided by Speaker soon</i>
            <br/><br/>&nbsp&nbsp 
            - (Jason Wei, Researcher @OpenAI)
            <br/><br/><br/>
          2. Keynote 09:45-10:30: Lightning Speed AI Inference to understand profoundly and intuitively 
            <br/><br/>&nbsp&nbsp 
            - (Jonathan Ross, CEO @Groq)
            <br/><br/><br/>
          3. Keynote 10:30-11:15: AI for Work: How GenAI Improves the Way We Work and Collaborate 
            <br/><br/>&nbsp&nbsp 
            - (Sam Liang, CEO @Otter.AI)
            <br/><br/><br/>
          4. Keynote 11:15-11:45: What Makes SF and CA the Capital of AI in the World 
            <br/><br/>&nbsp&nbsp 
            - (Fiona Ma, State Treasurer @State Treasurer's Office)
            <br/><br/><br/>
          5. Panel Discussion 13:00-13:45: The Future and Challenges of AI-Powered Enterprise Copilot
            <br/><br/>&nbsp&nbsp 
            - (Bhavin Shah, CEO & Founder @Moveworks), (Kevin Moody, CEO @Mem Labs)
            <br/><br/><br/>
          6. Panel Discussion 13:45-14:30: Pioneering Women in Generative AI 
            <br/><br/>&nbsp&nbsp 
            - (Dr. Marily Nika, AI Product Lead @Google, Moderator) | (Anya Cheng, Founder & CEO @Taelor, Moderator) | (Rashmi Misra, Chief AI Officer @Analog Device) | (Jia Li, Co-Founder, Chief AI Officer & President@LiveX.AI) | (Rochelle Mattern, Director of Solutions Engineering @SambaNova) | (Claire Xie, Founder @Clink AI)
            <br/><br/><br/>
          7. Panel Discussion 14:30-15:15: The World of Customer Support with AI Agents
            <br/><br/>&nbsp&nbsp 
            - (Jia Li, Co-Founder, Chief AI Officer & President@LiveX.AI) | (Swapnil Jain, CEO @Observe.ai) | (Tim Shi, CTO @Cresta.AI), (Henry Peter, CTO & Co-Founder @Ushur)
            <br/><br/><br/>
          8. Fireside Chat 16:00-16:45: AI-Powered Personalization
            <br/><br/>&nbsp&nbsp 
            - (Yichong Xu, AI Researcher @character.ai)
            <br/><br/><br/>
        `,
      },
      {
        title: "Align Stage",
        content: `
          1. Panel Discussion 10:00-11:00: VC
            <br/><br/>&nbsp&nbsp
            - (Murray Newlands, Investor @Open Future Technology)
            <br/><br/><br/>
          2. Panel Discussion 11:00-12:00: VC
            <br/><br/>&nbsp&nbsp
            - (Benjamin Levy, Co-Founder & General Partner @BootstrapLabs)
            <br/><br/><br/>
          3. Keynote 14:30-15:15: GenAI and Crypto Investment
            <br/><br/>&nbsp&nbsp
            - (Mengfan Zhang, @MountainLion)
            <br/><br/><br/>
          4. Keynote 15:15-16:00: Knowledge Graphs & GraphRAG: Essential Ingredients for Enterprise GenAI
            <br/><br/>&nbsp&nbsp
            - (Philip Rathle, CTO @Neo4j)
            <br/><br/><br/>
          5. Keynote 16:00-16:45: Text to Video Editing
            <br/><br/>&nbsp&nbsp
            - (Jose Sotelo, Senior AI Researcher @Descript)
            <br/><br/><br/>
        `,
      },
      {
        title: "Breakout Room 6",
        content: `
          1. Workshop 09:00-11:00: <i>Will be provided by Speaker soon</i>
            <br/><br/>&nbsp&nbsp
            - (Nik Spirin, Director for Generative AI and LLMOps Platform @NVIDIA)
            <br/><br/><br/>
          2. Workshop 13:00-15:00: How to Use Otter.AI to Enpower GenAI Productivity at Work
            <br/><br/>&nbsp&nbsp
            - (Richard Tasker, Director of Product Management @Otter.AI)
            <br/><br/><br/>
          3. Workshop 15:00-17:00: <i>Will be provided by Speaker soon</i>
            <br/><br/>&nbsp&nbsp
            - (Zilliz)
            <br/><br/><br/>
        `,
      },
      {
        title: "Breakout Room 7",
        content: `
          1. Workshop 13:00-15:00: <i>Will be provided by Speaker soon</i>
            <br/><br/>&nbsp&nbsp
            - (Ushur)
            <br/><br/><br/>
        `,
      },
    ]);

    const OutlineList3 = ref([
      
      {
        title: "GPT Stage (Palace Of Fine Arts)",
        content: `
          1. Keynote 09:00-09:45: Top 3 Applications of Generative AI in Customer Experience
            <br/><br/>&nbsp&nbsp 
            - (Deon Nicholas, CEO @Forethought)
            <br/><br/><br/>
          2. Keynote 09:45-10:30: What Does AI Mean for Cloud Infrastructure 
            <br/><br/>&nbsp&nbsp 
            - (Dr. Yangqing Jia, Founder @Lepton.AI)
            <br/><br/><br/>
          3. Keynote 10:30-11:15: The Evolution of AI Assistants: Shaping the Future of Human-Computer Interaction
            <br/><br/>&nbsp&nbsp 
            - (Amazon)
            <br/><br/><br/>
          4. Keynote 11:15-12:00: Straight Talk on Selling an AI Startup
            <br/><br/>&nbsp&nbsp 
            - (Jon Shalowitz, Managing Partner @Woodside Capital Partners)
            <br/><br/><br/>
          5. Panel Discussion 13:00-13:45: VectorDB 2.0 with Longer Context Window 
            <br/><br/>&nbsp&nbsp 
            - (Eddie Aftandilian, Principal Researcher @GitHub, Moderator) | (Alexander Ratner, CEO @SnorkelAI, Moderator) | (Bob Van Luijt, CEO & Co-Founder @Weaviate) | (Amr Awadallah, CEO @Vectara)
            <br/><br/><br/>
          6. Keynote 13:45-14:15: Path to Production: LLM Evaluations and Observability
            <br/><br/>&nbsp&nbsp 
            - (Jason Lopatecki, CEO @Arize AI)
            <br/><br/><br/>
          7. Keynote 14:15-14:45: <i>Will be provided by Speaker soon</i>
            <br/><br/>&nbsp&nbsp 
            - (Sri Satish Ambati, Founder & CEO @H2O.ai)
            <br/><br/><br/>
          8. Panel Discussion 14:45-15:30: Building a Responsible AGI: Ethics of AI in Decision-Making 
            <br/><br/>&nbsp&nbsp 
            - (Matthew Stepka, Founder & Managing Partner @Machina Ventures, Moderator) | (IDA Ireland) | (Greg Tanaka, Palo Alto Council Member)
            <br/><br/><br/>
          9. Panel Discussion 15:30-16:15: Video Generation Models: from Research to Production 
            <br/><br/>&nbsp&nbsp 
            - (Ram Sriharsha, CTO @Pinecone, Moderator) | (Sanket Shah, CEO @InVideo) | (Jiajun Lu, Founder & CEO @Akool), | (Sunny Rochiramani, Head of Engineering @Descript)
            <br/><br/><br/>
          10. Fireside Chat 16:15-17:00: <i>Will be provided by Speaker soon</i>
            <br/><br/>&nbsp&nbsp 
            - (Andy Hock, SVP, Product & Strategy @Cerebras Systems) 
            <br/><br/><br/>
        `,
      },
      {
        title: "AGI Stage (Palace Of Fine Arts Theatre)",
        content: `
          1. Keynote 09:00-09:45: Unleashing the Power of Causal AI: Transforming Insights into Actionable Knowledge
            <br/><br/>&nbsp&nbsp 
            - (Dr. Darko Matovski, Co-Founder & CEO @CausaLens)
            <br/><br/><br/>
          2. Keynote 09:45-10:30: Lightning Speed AI Inference to understand profoundly and intuitively
            <br/><br/>&nbsp&nbsp 
            - (Aisera)
            <br/><br/><br/>
          3. Keynote 10:30-11:15: <i>Will be provided by Speaker soon</i>
            <br/><br/>&nbsp&nbsp 
             - (Sharan Narang, Co-Author @Llama 3 & Llama 2)
            <br/><br/><br/>
          4. Keynote 11:15-12:00: Applications of GenAI on Devices
            <br/><br/>&nbsp&nbsp 
             - (Qualcomm VP)
            <br/><br/><br/>
          5. Panel Discussion 13:00-13:45: AI and the Future of Human Work 
            <br/><br/>&nbsp&nbsp 
            - (Philip Rathle, CTO @Neo4j) | (Mike Murchison, CEO @Ada) | (Ahmed Mo, CEO & Co-Founder @Dapi.com)
            <br/><br/><br/>
          6. Panel Discussion 13:45-14:30: Synthesizing Data Generation 
            <br/><br/>&nbsp&nbsp 
            - (Philip Rathle, CTO @Neo4j, Moderator) | (Kevin McNamara, CEO @Parallel Domain) | (Emrah Gultekin, Chairman & Co-Founder @Chooch) | (Dr. Irene Huang, Senior Director @TaskUs)
            <br/><br/><br/>
          7. Panel Discussion 14:30-15:15: AI and Intellectual Property: Navigating the New Landscape 
            <br/><br/>&nbsp&nbsp 
            - (Shawn Flynn, Principal @Global Capital Markets, Moderator) | (Jake Heller, CEO @CaseText, Head of Product, CoCounsel @Thomson Reuters) | (Jiarui Liu, Partner @BitLex & Fellow @Stanford Center for Internet and Society)
            <br/><br/><br/>
          8. Panel Discussion 15:15-16:00: LLM Safety and Security
            <br/><br/>&nbsp&nbsp 
            - (Yaron Singer, CEO @Robust Intelligence) | (Prof. Raluca Ada Popa, Professor @UC Berkeley)
            <br/><br/><br/>
          9. Fireside Chat 16:30-17:00: Building the Future Classroom 
            <br/><br/>&nbsp&nbsp 
             - (Prof. Hamza Farooq, Founder @traversaal.ai, Moderator) | (Bryan Talebi, CEO & Co-Founder @Ahura AI)
            <br/><br/><br/>
        `,
      },
      {
        title: "Align Stage",
        content: `
          1. Panel Discussion 09:00-10:00: AI and Healthcare
            <br/><br/>&nbsp&nbsp
            - (Lindsey Spellman, Head of Marketing @Abridge) | (IBM)
            <br/><br/><br/>
          2. Panel Discussion 10:00-11:00: How to use data to enpower your business
            <br/><br/>&nbsp&nbsp
            - (Shawn Flynn, Principal @Global Capital Markets, Moderator) | (Kathryn Wu, Co-Founder @Openmart) | (Telus International) | (Zuora) | (Streetbeat)
            <br/><br/><br/>
          3. Panel Discussion 11:00-12:00: GenAI with Crypto World
            <br/><br/>&nbsp&nbsp
            - (MountainLion)
            <br/><br/><br/>
          4. Keynote 13:00-13:45: <i>Will be provided by Speaker soon</i>
            <br/><br/>&nbsp&nbsp
            - (Gerald Parloiu, Lead Lead GTM @Sana.ai)
            <br/><br/><br/>
          5. Keynote 13:45-14:30: AI in Education: Enhancing Learning Experiences
            <br/><br/>&nbsp&nbsp
            - (Prof. Hamza Farooq, Founder @traversaal.ai)
            <br/><br/><br/>
          6. Panel Discussion 14:30-15:15: Enterprise
            <br/><br/>&nbsp&nbsp
            - (IBM)
            <br/><br/><br/>
          7. Keynote 15:15-16:00: Minority Culture Preservation and GenAI
            <br/><br/>&nbsp&nbsp
            - (Tiffany Joy Basse, Economic Development Director and Member @Tripanick-Nansemond Indian Tribe)
            <br/><br/><br/>
        `,
      },
      {
        title: "Breakout Room 6",
        content: `
          1. Workshop 09:00-11:00: <i>Will be provided by Speaker soon</i>
            <br/><br/>&nbsp&nbsp
            - (Pinecone)
            <br/><br/><br/>
        `,
      },
      {
        title: "Breakout Room 7",
        content: `
          1. Workshop 13:00-15:00: <i>Will be provided by Speaker soon</i>
            <br/><br/>&nbsp&nbsp
            - (Seth Stephens-Davidowitz, Author @HarperCollins Publishers)
            <br/><br/><br/>
        `,
      },
    ]);
    const dayActive = ref('day1')
    return {
      screenWidth,
      OutlineList,
      OutlineList2,
      OutlineList3,
      dayActive,
   
    };
  },
  components: {},
  methods: {},
  mounted() {},
  unmounted() {},
};
</script>

<style scoped lang='scss'>
.slick-carousel2 {
  width: 100%;
  margin-top: 0.4rem;
}
.swiper_box {
  padding-left: 0.3rem;
  position: relative;
  &.np {
    padding-left: 0;
  }
  &.swiper_box1 {
    &.shadow-left {
      &::before {
        position: absolute;
        content: "";
        display: block;
        width: 100px;
        height: 100%;
        background: linear-gradient(
          270deg,
          #f4f9ff 0%,
          rgba(244, 249, 255, 0) 100%
        );
        top: 0;
        left: 50%;
        z-index: 999;
      }
    }
  }
  &.swiper_box3 {
    &.shadow-right {
      &::before {
        position: absolute;
        content: "";
        display: block;
        width: 100px;
        height: 100%;
        background: linear-gradient(
          270deg,
          #f4f9ff 0%,
          rgba(244, 249, 255, 0) 100%
        );
        top: 0;
        right: 50%;
        z-index: 999;
      }
    }
  }
}
.ss-content {
  width: 100%;
  background: #ffffff;
  .time-list{
    display: flex;
    align-items: center;
    font-family: Microsoft YaHei, Microsoft YaHei;
    font-weight: bold;
    font-size: .37rem;
    color: #0778D8;
    padding: .3rem;
    img{
      width: .45rem;
      margin-right: 5px;
    }
  }
  .img {
    position: relative;
    img {
      width: 100%;
    }
    .info {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      padding-left: 0.4rem;
      .title {
        font-family: Microsoft YaHei, Microsoft YaHei;
        font-weight: bold;
        font-size: 0.59rem;
        color: #202020;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      .date {
        height: 0.5rem;
        line-height: 0.5rem;
        padding: 0 0.25rem;
        text-align: center;
        background: linear-gradient(
          90deg,
          #ffffff 43%,
          rgba(255, 255, 255, 0.7) 100%
        );
        font-family: Microsoft YaHei, Microsoft YaHei;
        font-weight: 400;
        font-size: 0.296rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
        margin-top: 0.1rem;
        &.d1 {
          color: #0382ee;
        }
        &.d2 {
          color: #ff8a00;
        }
        &.d3 {
          color: #00b934;
        }
      }
    }
  }
  .inner_ss-content {
    height: 13rem;
    width: 100%;
    color: #000000;
    overflow: hidden;
    overflow-y: auto;
    padding: 0.3rem;
    .ss-content_item {
      padding-left: 0.44rem;
      border-left: 1px solid rgba(0, 0, 0, 0.2);
      position: relative;
      padding-bottom: 0.7407rem;
      font-family: HarmonyOS Sans SC bold;
      .flagBg {
        width: 12px;
        height: 12px;
        position: absolute;
        top: 0;
        left: -6px;
      }
      .title {
        // padding-top: 0.44rem;
        font-size: 0.44rem;
        font-weight: bold;
        font-family: HarmonyOS Sans SC bold;
      }
      .detail {
        font-size: 0.2963rem;
        font-family: HarmonyOS Sans SC Regular;
        margin-top: 0.2963rem;
      }
    }
  }
}
.swoperCont_days {
 .tab{
    width: 100%;
    display: flex;
    max-width: 16rem;
    height: 1.1rem;
    margin-top: 20px;
    .tab-item{
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: bold;
      font-size: .37rem;
      color: rgba(7,120,216,0.3);
      .daybg{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      &.tab-item1.active{
        .daybg{
          background: url('../assets/images/day1_active.png');
          background-size: 100% 100%;
          color: #FFFFFF;
        }
      }
      &.tab-item2.active{
        .daybg{
          background: url('../assets/images/day2_active.png');
          background-size: 100% 100%;
          color: #FFFFFF;
        }
      }
      &.tab-item3.active{
        .daybg{
          background: url('../assets/images/day3_active.png');
          background-size: 100% 100%;
          color: #FFFFFF;
        }
      }
    }
    .tab-item1,.tab-item2{
      width: 33%;
      background: rgba(220,236,251,0.5);
      height: 1.1rem;
    }
    .tab-item3{
      height: 1.1rem;
      width: 34%;
      background: url('../assets/images/moren_day.png');
      background-size: 100% 100%;
    }
  }
}

</style>
