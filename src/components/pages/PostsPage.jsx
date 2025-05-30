import { useState } from 'react';
import styled from 'styled-components';
import Container from '../shared/Container';

const PostsPage = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  const posts = [
    {
      title: "NEVER COMPARE YOURSELF TO OTHERS",
      excerpt: "You have your own timeline neither behind nor ahead of others, and that's exactly where you should be. So comparing yourself to others is a waste of time.",
      // date: "",
      tags: [],
      readTime: "",
      color: "#ff9e80"
    },
    {
      title: "KEEP LEARNING AND GROWING",
      excerpt: "The moment you stop learning is the moment you stop growing. Keep learning and growing every day.",
      // date: "",
      tags: [],
      readTime: "",
      color: "#a693eb"
    },
    {
      title: "THE IMPORTANCE OF HUMILITY",
      excerpt: "Humility is the ability to accept that you don't know everything and that there is always room for improvement.",
      // date: "",
      tags: [],
      readTime: "",
      color: "#a2d39b"
    }
  ];

  const allTags = ['All', ...new Set(posts.flatMap(post => post.tags))];
  
  const filteredPosts = selectedTag === 'All' 
    ? posts 
    : posts.filter(post => post.tags.includes(selectedTag));

  return (
    <PageWrapper>
      <Container>
        <Title>Thoughts</Title>
        <Description>
          Writing about some of my thoughts and random ideas.
        </Description>

        {/* <TagsContainer>
          {allTags.map(tag => (
            <TagButton 
              key={tag}
              isSelected={selectedTag === tag}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </TagButton>
          ))}
        </TagsContainer> */}

        <PostsGrid>
          {filteredPosts.map((post, index) => (
            <PostCard key={index}>
              <PostColor style={{ backgroundColor: post.color }} />
              <PostContent>
                <PostMeta>
                  <PostDate>{post.date}</PostDate>
                  <PostReadTime>{post.readTime}</PostReadTime>
                </PostMeta>
                <PostTitle>{post.title}</PostTitle>
                <PostExcerpt>{post.excerpt}</PostExcerpt>
                <PostTags>
                  {post.tags.map(tag => (
                    <PostTag key={tag} onClick={() => setSelectedTag(tag)}>
                      {tag}
                    </PostTag>
                  ))}
                </PostTags>
              </PostContent>
            </PostCard>
          ))}
        </PostsGrid>
      </Container>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  padding: var(--spacing-xl) 0;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: var(--spacing-md);
`;

const Description = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--spacing-lg);
  color: var(--text-secondary);
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  justify-content: center;
  margin-bottom: var(--spacing-xl);
`;

const TagButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: var(--radius-full);
  border: none;
  background-color: ${props => props.isSelected ? 'var(--accent)' : 'var(--background-secondary)'};
  color: ${props => props.isSelected ? 'white' : 'var(--text-primary)'};
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    background-color: var(--accent);
    color: white;
    transform: translateY(-2px);
  }
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
`;

const PostCard = styled.article`
  border-radius: var(--radius-md);
  background: var(--background-secondary);
  overflow: hidden;
  transition: transform var(--transition-normal);
  cursor: pointer;
  background-color: rgb(53, 62, 100);


  &:hover {
    transform: translateY(-5px);
  }
`;

const PostColor = styled.div`
  height: 4px;
  width: 100%;
  // background-color: #59659D;
`;

const PostContent = styled.div`
  padding: var(--spacing-md);
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
  font-size: 0.875rem;
  color: var(--text-secondary);
`;

const PostDate = styled.span``;

const PostReadTime = styled.span``;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
  line-height: 1.3;
`;

const PostExcerpt = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
`;

const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
`;

const PostTag = styled.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    background-color: var(--accent);
    color: white;
  }
`;

export default PostsPage; 