import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** news */
export type News = {
  __typename?: 'News';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  news: News;
  newsList: Array<News>;
};


export type QueryNewsArgs = {
  id: Scalars['String'];
};

export type NewsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type NewsQuery = { __typename?: 'Query', news: { __typename?: 'News', id: string, title: string } };

export type NewsListQueryVariables = Exact<{ [key: string]: never; }>;


export type NewsListQuery = { __typename?: 'Query', newsList: Array<{ __typename?: 'News', id: string, title: string }> };


export const NewsDocument = gql`
    query News($id: String!) {
  news(id: $id) {
    id
    title
  }
}
    `;

/**
 * __useNewsQuery__
 *
 * To run a query within a React component, call `useNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNewsQuery(baseOptions: Apollo.QueryHookOptions<NewsQuery, NewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NewsQuery, NewsQueryVariables>(NewsDocument, options);
      }
export function useNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsQuery, NewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NewsQuery, NewsQueryVariables>(NewsDocument, options);
        }
export type NewsQueryHookResult = ReturnType<typeof useNewsQuery>;
export type NewsLazyQueryHookResult = ReturnType<typeof useNewsLazyQuery>;
export type NewsQueryResult = Apollo.QueryResult<NewsQuery, NewsQueryVariables>;
export const NewsListDocument = gql`
    query NewsList {
  newsList {
    id
    title
  }
}
    `;

/**
 * __useNewsListQuery__
 *
 * To run a query within a React component, call `useNewsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useNewsListQuery(baseOptions?: Apollo.QueryHookOptions<NewsListQuery, NewsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NewsListQuery, NewsListQueryVariables>(NewsListDocument, options);
      }
export function useNewsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsListQuery, NewsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NewsListQuery, NewsListQueryVariables>(NewsListDocument, options);
        }
export type NewsListQueryHookResult = ReturnType<typeof useNewsListQuery>;
export type NewsListLazyQueryHookResult = ReturnType<typeof useNewsListLazyQuery>;
export type NewsListQueryResult = Apollo.QueryResult<NewsListQuery, NewsListQueryVariables>;