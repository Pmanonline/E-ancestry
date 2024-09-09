const userId = userInfo?.user.id;

{
  /* <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {currentResults.map((result) => (
                  <li
                    key={result._id}
                    className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700 flex flex-col"
                    style={{ flex: "1 1 30%" }}
                  >
                    <a href="#">
                      <img
                        className="rounded-t-lg w-full h-[10rem] object-cover rounded-xl mb-4"
                        src={`${backendURL}/${result.image}`}
                        alt="images"
                      />
                    </a>
                    <div className="p-3 flex flex-col space-y-2">
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Full name:
                        <span className="text-white ml-2">
                          {result.firstName} {result.lastName}
                        </span>
                      </p>
                      {result.gender && (
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          Gender:
                          <span className="text-white ml-2">
                            {result.gender}
                          </span>
                        </p>
                      )}
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Date of Birth:
                        <span className="text-white ml-2">
                          {new Date(result.DOB).toLocaleDateString()}
                        </span>
                      </p>
                      {result.placesLived && (
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          Place Lived:
                          <span className="text-white ml-2">
                            {result.placesLived}
                          </span>
                        </p>
                      )}

                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        {result.role === "main" ? (
                          <span className="text-white ">
                            Family Tree Creator
                          </span>
                        ) : (
                          <span className="text-white ">{result.role}</span>
                        )}
                      </p>

                      {result.Lstatus === "Deceased" && (
                        <span className="text-white">
                          <span className="block mb-2">{result.Lstatus}</span>
                          {new Date(result.DOB).getFullYear()} to{" "}
                          {result.yearDeceased
                            ? new Date(result.yearDeceased).getFullYear()
                            : "Unknown year"}
                        </span>
                      )}

                      {result.role !== "main" && (
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          <span className="italic">Related to:</span>
                          <span className="text-white ml-2">
                            {result.userName}
                          </span>
                        </p>
                      )}

                      {LoggedId !== result.userId && (
                        <a
                          onClick={() => handleResultClick(result.userId)}
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white border-2 border-green bg-green rounded-lg focus:ring-4 focus:outline-none cursor-pointer transition ease-in-out duration-200 transform hover:scale-105"
                        >
                          Go to
                          {result.role !== "main" ? (
                            <>
                              <span className="font-medium mx-1">
                                {result.userName}
                              </span>
                              's Profile
                            </>
                          ) : (
                            " Profile"
                          )}
                          <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul> */
}
